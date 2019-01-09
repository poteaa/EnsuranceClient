import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { PoliciesModule } from './../feature/policies/policies.module';

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
  providers: [],
})
export class CoreModule { }
