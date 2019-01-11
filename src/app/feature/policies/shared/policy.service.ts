import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpBackendService } from './../../../core/services/http-backend.service';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private readonly policiesUrl = 'policies';
  private readonly risksUrl = 'risks';

  constructor(private httpBackendService: HttpBackendService) { }

  getPolicies(): Observable<Policy[]> {
    return this.httpBackendService.get<Policy[]>(this.policiesUrl);
  }

  getPolicy(id: number): Observable<Policy> {
    return this.httpBackendService.get<Policy>(`${this.policiesUrl}/${id}`);
  }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.httpBackendService
            .post<Policy, Policy>(`${this.policiesUrl}`, policy);
  }

  updatePolicy(id: number, policy: Policy): Observable<Policy> {
    return this.httpBackendService
            .put<boolean, Policy>(`${this.policiesUrl}/${id}`, policy);
  }
}
