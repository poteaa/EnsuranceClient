import { Injectable } from '@angular/core';
import { HttpBackendService } from '../../../core/services/http-backend.service';
import { Risk } from './risk.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private readonly risksUrl = 'risks';

  constructor(private httpBackendService: HttpBackendService) { }

  getRisks(): Observable<Risk[]> {
    return this.httpBackendService.get<Risk[]>(this.risksUrl);
  }
}
