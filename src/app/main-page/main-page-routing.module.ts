import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component'
import { ExecutionComponent } from '../execution/execution.component'


const mainPageRouter: Routes = [
    {path:'main-page', component: MainPageComponent},
    {path:'exe/:template', component: ExecutionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainPageRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class MainPageRoutingModule { }
