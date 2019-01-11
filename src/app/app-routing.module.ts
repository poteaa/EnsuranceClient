import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PolicyEditComponent } from './feature/policies/policy-edit/policy-edit.component';
import { NgModule } from '@angular/core';
import { PoliciesComponent } from './feature/policies/policies.component';

const appRoutes: Routes = [
    { path: '', component: PoliciesComponent },
    { path: 'policy/create', component: PolicyEditComponent },
    { path: 'policy/:id/edit', component: PolicyEditComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
     imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class  AppRoutingModule {}
