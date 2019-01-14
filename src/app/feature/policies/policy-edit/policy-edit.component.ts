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
  validPercentage: string;
  validPercentageRange = '([0-9]|[1-8][0-9]|9[0-9]|100)';
  validPercentageRangeHighRisk = '([0-9]|[1-8][0-9]|9[0-9]|50)';
  errorHighRiskPolicy = '';
  private id: number;
  private editMode = false;

  constructor(private policyService: PolicyService,
              private riskService: RiskService,
              private coverageService: CoverageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.validPercentage = this.validPercentageRange;
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
                coverageType: this.policy.coverageType,
                coveragePercentage: this.policy.coveragePercentage,
                coverageTime: this.policy.coverageTime,
                cost: this.policy.cost,
                riskType: this.policy.riskType
              });
            }
          });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.policy = value;
    console.log(this.policy);
    if (this.policy.riskType === 4 && this.policy.coveragePercentage > 50) {
      this.errorHighRiskPolicy = `The coverage percentage for a high risk policy can not b
      e greater than 50%`;
      return;
    }
    if (this.editMode) {
      this.policyService.updatePolicy(this.id, this.policy)
        .subscribe(policy => this.policy = policy);
    } else {
      this.policyService.addPolicy(this.policy)
        .subscribe(policy => this.policy = policy);
    }
  }

  riskChange(riskType, coveragepercentage) {
    if (riskType.value === '4') {
      this.validPercentage = this.validPercentageRangeHighRisk;
    } else {
      this.errorHighRiskPolicy = '';
      this.validPercentage = this.validPercentageRange;
    }
  }

  onClear() {
    this.policyForm.reset();
    this.editMode = false;
  }
}
