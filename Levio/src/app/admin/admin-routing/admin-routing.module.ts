import {AdminComponent} from './../admin.component';
import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {JobOfferComponent} from '../Component/job-offer/job-offer.component';
import {DashboardComponent} from '../Component/dashboard/dashboard.component';
import {ClientComponent} from '../Component/client/client.component';
import {ProjectComponent} from '../Component/project/project.component';
import {ResourcesComponent} from '../Component/resources/resources.component';
import {MandatsComponent} from '../Component/mandats/mandats.component';
import {SupportComponent} from '../Component/support/support.component';
import {RequestComponent} from '../Component/request/request.component';
import {ApplicationBackComponent} from '../Component/job-offer/application-back/application-back.component';

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
          },
          {
            path: 'resources',
            component: ResourcesComponent
          },
          {
            path: 'mandats',
            component: MandatsComponent
          },
          {
            path: 'JobOffer',
            component: JobOfferComponent
          },
          {
            path: 'ApplicationBack/:id',
            component: ApplicationBackComponent
          },
          {
            path: 'allRequests',
            component: RequestComponent
          },
          {
            path: 'support',
            component: SupportComponent
          },
          {
            path: 'request',
            component: RequestComponent
          },
          {path: 'ApplicationBack/:id', component: ApplicationBackComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
