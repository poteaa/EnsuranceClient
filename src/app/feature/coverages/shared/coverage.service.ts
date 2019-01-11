import { Injectable } from '@angular/core';
import { Coverage } from './coverage.model';
import { HttpBackendService } from '../../../core/services/http-backend.service';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  private readonly coveragesUrl = 'coverages';

  constructor(private httpBackendService: HttpBackendService) { }

  getCoverages() {
    return this.httpBackendService.get<Coverage[]>(this.coveragesUrl);
  }
}
