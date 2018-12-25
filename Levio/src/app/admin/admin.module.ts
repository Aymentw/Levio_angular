import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from './Component/job-offer/job-offer.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { ApplicationPipe } from './pipes/application.pipe';
import {MatTabsModule} from '@angular/material';
import {TabModule} from 'angular-tabs-component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ApplicationBackComponent } from './Component/job-offer/application-back/application-back.component';
import { JobOfferDetailsComponent } from './Component/job-offer/application-back/job-offer-details/job-offer-details.component';
import { TestComponent } from './Component/job-offer/application-back/test/test.component';
import { InterviewsComponent } from './Component/job-offer/application-back/interviews/interviews.component';
import { RequestComponent } from './Component/request/request.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ClientComponent } from './Component/client/client.component';
import { ProjectComponent } from './Component/project/project.component';
import { ResourcesComponent } from './Component/resources/resources.component';
import { MandatsComponent } from './Component/mandats/mandats.component';
import { SupportComponent } from './Component/support/support.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    NotifierModule,
    FilterPipeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
   
  ],
  declarations: [
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminComponent,
    JobOfferComponent,
    ApplicationBackComponent,
    JobOfferDetailsComponent,
    TestComponent,
    ApplicationPipe,
    InterviewsComponent,
    RequestComponent,
    DashboardComponent,
    ClientComponent,
    ProjectComponent,
    ResourcesComponent,
    MandatsComponent,
    SupportComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
