import { Component, OnInit } from '@angular/core';
import { PolicyService } from './shared/policy.service';
import { Policy } from './shared/policy.model';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.less']
})
export class PoliciesComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies()
      .subscribe(policies => {
        this.policies = policies;
      });
  }

  delete(id: number) {
    this.policyService.deletePolicy(id)
      .subscribe(() => this.policies.splice(this.policies.findIndex(p => p.id === id), 1));
    console.log(id);
  }

}
