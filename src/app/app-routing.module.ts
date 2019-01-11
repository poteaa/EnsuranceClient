import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PolicyEditComponent } from './feature/policies/policy-edit/policy-edit.component';
import { NgModule } from '@angular/core';
import { PoliciesComponent } from './feature/policies/policies.component';
import { PolicyDetailComponent } from './feature/policies/policy-detail/policy-detail.component';

const appRoutes: Routes = [
    { path: '', component: PoliciesComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'policies/:id/detail', component: PolicyDetailComponent },
    { path: 'policy/create', component: PolicyEditComponent },
    { path: 'policies/:id/edit', component: PolicyEditComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
     imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class  AppRoutingModule {}
