import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobOfferComponent } from '../Component/job-offer/job-offer.component';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';
import { ClientComponent } from '../Component/client/client.component';
import { ProjectComponent } from '../Component/project/project.component';
import { ResourcesComponent } from '../Component/resources/resources.component';
import { MandatsComponent } from '../Component/mandats/mandats.component';
import { SupportComponent } from '../Component/support/support.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'client',
            component: ClientComponent
          },
          {
            path: 'project',
            component: ProjectComponent
          },  {
            path: 'resources',
            component: ResourcesComponent
          },  {
            path: 'mandats',
            component: MandatsComponent
          },  {
            path: 'job',
            component: JobOfferComponent
          },
          {
            path: 'support',
            component: SupportComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
