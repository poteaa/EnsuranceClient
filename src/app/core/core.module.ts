import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { PoliciesModule } from './../feature/policies/policies.module';
import { PolicyService } from './../feature/policies/shared/policy.service';
import { CoverageService } from './../feature/coverages/shared/coverage.service';
import { RiskService } from '../feature/risks/shared/risk.service';
import { HeaderComponent } from './header/header.component';
import { ClientService } from '../feature/clients/shared/client.service';
import { ClientsModule } from '../feature/clients/clients.module';
import { AuthModule } from './../feature/auth/auth.module';
import { AuthService } from './../feature/auth/shared/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './../feature/auth/shared/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
      CommonModule,
      AppRoutingModule,
      PoliciesModule,
      ClientsModule,
      AuthModule
  ],
  exports: [
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [
    PolicyService,
    CoverageService,
    RiskService,
    ClientService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class CoreModule { }
