import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { PoliciesModule } from './../feature/policies/policies.module';
import { PolicyService } from './../feature/policies/shared/policy.service';
import { CoverageService } from './../feature/coverages/shared/coverage.service';
import { RiskService } from '../feature/risks/shared/risk.service';

@NgModule({
  declarations: [
  ],
  imports: [
      CommonModule,
      AppRoutingModule,
      PoliciesModule
  ],
  exports: [
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PolicyService,
    CoverageService,
    RiskService
  ],
})
export class CoreModule { }
