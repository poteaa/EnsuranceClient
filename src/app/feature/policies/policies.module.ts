import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciesComponent } from './policies.component';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';

@NgModule({
    declarations: [
        PoliciesComponent,
        PolicyEditComponent,
        PolicyDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class PoliciesModule { }
