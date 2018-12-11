import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {JobOffer} from '../modele/JobOffer';

@Injectable()
export class JobOfferService {

  constructor(private http: HttpClient) { }
getAllJobOffer() {
  return this.http.get<JobOffer[]>('/map-web/map/joboffer/getalljoboffer');

}
}
