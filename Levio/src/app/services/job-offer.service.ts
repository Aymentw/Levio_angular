import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JobOffer} from '../modele/JobOffer';

@Injectable()
export class JobOfferService {

  constructor(private http: HttpClient) { }
getAllJobOffer() {
  return this.http.get<JobOffer[]>('/map-web/map/joboffer/getalljoboffer');

}
addJobOffer(jobOffer) {
    const job = JSON.stringify(jobOffer);
  console.log(job);
    return this.http.post<JobOffer>('/map-web/map/joboffer', jobOffer);

}
  UpdateJobOffer(jobOffer) {
    const job = JSON.stringify(jobOffer);
    console.log(job);
    return this.http.put<JobOffer>('/map-web/map/joboffer', jobOffer);

  }
  getJobOffer(id) {
    return this.http.get<JobOffer>('/map-web/map/joboffer/getalljoboffer/' + id);

  }
}
