import { PolicyBase } from './../../policies/shared/policy-base.model';
import { PolicyService } from './../../policies/shared/policy.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { forkJoin } from 'rxjs';
import { ClientPolicy } from '../shared/client-policy.model';
import { Policy } from '../../policies/shared/policy.model';

@Component({
  selector: 'app-client-policies-edit',
  templateUrl: './client-policies-edit.component.html',
  styleUrls: ['./client-policies-edit.component.less']
})
export class ClientPoliciesEditComponent implements OnInit {

  clientPolicies: ClientPolicy[];
  allPolicies: Policy[];

  constructor(private clientService: ClientService,
              private policyService: PolicyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
      const id = +params['id'];
      const policiesObservable = this.policyService.getPoliciesBasicInfo();
      const clientObservable = this.clientService.getClientBasicInfo(id);
      const clientPoliciesObservable = this.clientService.getClientPolicy(id);
      forkJoin([policiesObservable, clientObservable, clientPoliciesObservable])
        .subscribe(([policies, client, clientPolicies]) => {
          this.clientPolicies = clientPolicies;
          this.allPolicies = policies;
          const clientPolicy: ClientPolicy = this.clientPolicies && this.clientPolicies.length > 0 ?
            this.clientPolicies[0] : null;
          if (clientPolicy) {
            policies.forEach(p => {
              const existingClientPolicy = this.clientPolicies.find(cp => cp.policyId === p.id);
              if (existingClientPolicy) {
                existingClientPolicy.isActive = true;
              } else {
                this.clientPolicies.push(
                  new ClientPolicy(0, clientPolicy.id, p.id, p.name, clientPolicy.startDate, false ));
              }
            });
          }
        });
      });
  }

  addorRemoveClientPolicy(id: number) {
    const policy = this.clientPolicies.find(p => p.id === id);
    if (policy.isActive) {
      this.clientService.deleteClientPolicy(id)
        .subscribe(() => {
          const deactivatePolicy = this.clientPolicies.find(cp => cp.id === id);
          deactivatePolicy.isActive = false;
        });
    } else {
      this.clientService.createClientPolicy(policy)
        .subscribe();
    }
  }

}
