import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PolicyEditComponent } from './feature/policies/policy-edit/policy-edit.component';
import { NgModule } from '@angular/core';
import { PoliciesComponent } from './feature/policies/policies.component';
import { PolicyDetailComponent } from './feature/policies/policy-detail/policy-detail.component';
import { ClientsComponent } from './feature/clients/clients.component';
import { ClientPoliciesEditComponent } from './feature/clients/client-policies-edit/client-policies-edit.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { AuthGuard } from './feature/auth/shared/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: PoliciesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'policies/:id/detail', component: PolicyDetailComponent },
    { path: 'policy/create', component: PolicyEditComponent, canActivate: [AuthGuard] },
    { path: 'policies/:id/edit', component: PolicyEditComponent , canActivate: [AuthGuard]},
    { path: 'clients', component: ClientsComponent },
    { path: 'clients/:id/policiesedit', component: ClientPoliciesEditComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
     imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class  AppRoutingModule {}
