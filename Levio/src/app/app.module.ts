import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobOfferComponent } from './Home/job-offer/job-offer.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Container/header/header.component';
import { FooterComponent } from './Container/footer/footer.component';
import { SideComponent } from './Container/side/side.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {NotifierModule} from 'angular-notifier';
import { ApplicationPipe } from './filters/application.pipe';
import {FilterPipeModule} from 'ngx-filter-pipe';
import { ApplicationBackComponent } from './Home/job-offer/application-back/application-back.component';
import { JobOfferDetailsComponent } from './Home/job-offer/application-back/job-offer-details/job-offer-details.component';
import { TestComponent } from './Home/job-offer/application-back/test/test.component';
import {TabModule} from 'angular-tabs-component';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InterviewsComponent } from './Home/job-offer/application-back/interviews/interviews.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { RequestComponent } from './Home/request/request.component';



@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    ApplicationPipe,
    ApplicationBackComponent,
    JobOfferDetailsComponent,
    TestComponent,
    InterviewsComponent
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    OwlNativeDateTimeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
