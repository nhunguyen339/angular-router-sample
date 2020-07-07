import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    FormsModule
  ]
})
export class CrisisCenterModule { }
