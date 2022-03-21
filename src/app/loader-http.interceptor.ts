import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { LoaderService } from "./search/loader.service";

@Injectable()
export class LoaderHttpInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();

    return next.handle(req).pipe(
      map(res => {
        this.loaderService.hideLoader();
        return res;
      }),
      catchError(error => {
        this.loaderService.hideLoader();
        throw error;
      })
    )
  }
}
