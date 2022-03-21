import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoaderService {
  private _loading = new BehaviorSubject<boolean>(false);

  loader = this._loading.asObservable();

  showLoader(): void {
    this._loading.next(true);
  }

  hideLoader(): void {
    this._loading.next(false);
  }
}