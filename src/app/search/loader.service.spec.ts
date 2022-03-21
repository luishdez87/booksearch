import { TestBed } from "@angular/core/testing";
import { LoaderService } from "./loader.service"

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LoaderService]
    })
    .compileComponents();
    service = TestBed.inject(LoaderService);
  });

  it('should change loader to true on showLoader', () => {
    service.showLoader();

    service.loader.subscribe(status => {
      expect(status).toBe(true);
    });
  });
  it('should change loader to false on hideLoader', () => {
    service.hideLoader();
    service.loader.subscribe(status => {
      expect(status).toBe(false);
    });
  })
});