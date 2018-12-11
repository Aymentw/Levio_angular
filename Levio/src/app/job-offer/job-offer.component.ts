import { Component, OnInit } from '@angular/core';
import {JobOffer} from '../modele/JobOffer';
import {JobOfferService} from '../services/job-offer.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css'],
  providers: [JobOfferService]
})
export class JobOfferComponent implements OnInit {
jobOffer: JobOffer[] = [];
  constructor(private service: JobOfferService) { }

  ngOnInit() {
this.service.getAllJobOffer().subscribe(res => this.jobOffer = (res));
  }

}
