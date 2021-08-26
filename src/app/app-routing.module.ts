import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthentitationGuard} from './auth/authentitation.guard'

const routes: Routes = [
  {
    path: "", redirectTo: 'login', pathMatch: "full"
  }, 
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule),canActivate: [AuthentitationGuard]},
  { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  { path: '**', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
