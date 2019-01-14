import { Injectable } from '@angular/core';
import { HttpBackendService } from './../../../core/services/http-backend.service';
import { Observable, of } from 'rxjs';
import { Client } from './client.model';
import { map, switchMap } from 'rxjs/operators';
import { ClientPolicy } from './client-policy.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly clientsBasicInfoUrl = 'clients';
  private readonly basicInfoUrl = 'basicinfo';
  private readonly clientPoliciesUrl = 'clientpolicies';
  private readonly clientUrl = 'clients';

  constructor(private httpBackendService: HttpBackendService) { }

  getClientsBasicInfo(): Observable<Client[]> {
    return this.httpBackendService.get<Client[]>(`${this.clientsBasicInfoUrl}/${this.basicInfoUrl}`);
  }
  getClientBasicInfo(id: number): Observable<Client> {
    return this.httpBackendService.get<Client>(`${this.clientsBasicInfoUrl}/${id}/${this.basicInfoUrl}`);
  }

  getClientPolicy(clientId: number): Observable<ClientPolicy[]> {
    return this.httpBackendService.get<ClientPolicy[]>(`${this.clientPoliciesUrl}/${this.clientUrl}/${clientId}`);
  }

  createClientPolicy(clientPolicy: ClientPolicy): Observable<ClientPolicy> {
    return this.httpBackendService.post<ClientPolicy, ClientPolicy>(this.clientPoliciesUrl, clientPolicy);
  }

  deleteClientPolicy(id: number): Observable<any> {
    return this.httpBackendService.delete(`${this.clientPoliciesUrl}/${id}`);
  }

}
