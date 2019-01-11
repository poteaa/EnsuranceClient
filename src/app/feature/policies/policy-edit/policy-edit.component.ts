import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Policy } from '../shared/policy.model';
import { forkJoin, of } from 'rxjs';
import { RiskService } from '../../risks/shared/risk.service';
import { Risk } from '../../risks/shared/risk.model';
import { Coverage } from '../../coverages/shared/coverage.model';
import { PolicyService } from './../shared/policy.service';
import { CoverageService } from '../../coverages/shared/coverage.service';

@Component({
  selector: 'app-policy-edit',
  templateUrl: './policy-edit.component.html',
  styleUrls: ['./policy-edit.component.less']
})
export class PolicyEditComponent implements OnInit {

  @ViewChild('f') policyForm: NgForm;
  policy: Policy;
  allRisks: Risk[] = [];
  allCoverages: Coverage[] = [];
  private id: number;
  private editMode = false;

  constructor(private policyService: PolicyService,
              private riskService: RiskService,
              private coverageService: CoverageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        const allRisksObservable = this.riskService.getRisks();
        const allCoveragessObservable = this.coverageService.getCoverages();
        const policyObservable = this.id ? this.policyService.getPolicy(this.id) : of(null);
        forkJoin([allRisksObservable, allCoveragessObservable, policyObservable])
          .subscribe(([allRisks, allCoverages, policy]) => {
            this.allRisks = allRisks;
            this.allCoverages = allCoverages;
            this.policy = policy;
            if (policy) {
              this.policyForm.setValue({
                name: this.policy.name,
                description: this.policy.description,
                coveragetype: this.policy.coverageType,
                coveragepercentage: this.policy.coveragePercentage,
                coveragetime: this.policy.coverageTime,
                cost: this.policy.cost,
                risktype: this.policy.riskType
              });
            }
          });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.policy = value;
    console.log(this.policy);
    if (this.editMode) {
      this.policyService.updatePolicy(this.id, this.policy)
        .subscribe(policy => this.policy = policy);
    } else {
      this.policyService.addPolicy(this.policy)
        .subscribe(policy => this.policy = policy);
    }
  }

  onClear() {
    this.policyForm.reset();
    this.editMode = false;
}
}
