import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients.component';
import { CommonModule } from '@angular/common';
import { ClientPoliciesEditComponent } from './client-policies-edit/client-policies-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ClientsComponent,
        ClientPoliciesEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class ClientsModule { }
