import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobOfferComponent} from './Home/job-offer/job-offer.component';
import {ApplicationBackComponent} from './Home/job-offer/application-back/application-back.component';

const routes: Routes = [
  {path: 'JobOffer', component: JobOfferComponent},
  {path: 'ApplicationBack/:id', component: ApplicationBackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
