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
    FilterPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
