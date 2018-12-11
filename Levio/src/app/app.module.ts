import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Container/header/header.component';
import { FooterComponent } from './Container/footer/footer.component';
import { SideComponent } from './Container/side/side.component';



@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
