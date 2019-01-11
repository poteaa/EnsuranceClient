import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { PolicyService } from '../shared/policy.service';
import { Policy } from '../shared/policy.model';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.less']
})
export class PolicyDetailComponent implements OnInit {

  policy: Policy;
  private id;

  constructor(private route: ActivatedRoute,
              private policyService: PolicyService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.policyService.getPolicyAllInfo(this.id)
          .subscribe(policy => this.policy = policy);
      });
  }

}
