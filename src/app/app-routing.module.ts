import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PolicyEditComponent } from './feature/policies/policy-edit/policy-edit.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: PolicyEditComponent }
];

@NgModule({
     imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class  AppRoutingModule {}
