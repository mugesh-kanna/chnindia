import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { EndUserComputingComponent } from './end-user-computing/end-user-computing.component';
import { TooltipModule } from 'primeng/tooltip';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'end-user-computing',
    component: EndUserComputingComponent
  }
]


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    EndUserComputingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
    TooltipModule
  ]
})
export class PagesModule { }
