import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent, data: {animation: 'crises'} },
  { path: 'crisis/:id', component: CrisisDetailComponent, data: {animation: 'crisis'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
