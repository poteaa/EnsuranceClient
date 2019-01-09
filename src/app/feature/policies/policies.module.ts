import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciesComponent } from './policies.component';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PoliciesComponent,
        PolicyEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class PoliciesModule { }
