import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../../../services/application.service';
import {JobOfferService} from '../../../services/job-offer.service';
import {JobOffer} from '../../../modele/JobOffer';
import {Application} from '../../../modele/Application';

@Component({
  selector: 'app-application-back',
  templateUrl: './application-back.component.html',
  styleUrls: ['./application-back.component.css'],
  providers: [ApplicationService]
})
export class ApplicationBackComponent implements OnInit {
application: Application;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: ApplicationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  });
    this.service.getApplication(this.id).subscribe(res => this.application = (res));

  }

  calculrating(rating: number) {
    return String(rating) + '%';
  }
}
