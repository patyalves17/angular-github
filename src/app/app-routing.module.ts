import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path:'', loadChildren:'./login/login.module#LoginModule'},
  { path:'list', loadChildren:'./list/list.module#ListModule', canLoad:[AuthGuard] }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
