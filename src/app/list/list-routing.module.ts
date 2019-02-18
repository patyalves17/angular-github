import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { ReposResolver } from './repos-resolver.service';
const routes: Routes = [
  { path:'', component: ListComponent, resolve:{repos:ReposResolver}}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
