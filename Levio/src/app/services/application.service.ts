import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JobOffer} from '../modele/JobOffer';
import {Application} from '../modele/Application';

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }
  getAllApplication() {
    return this.http.get<Application[]>('/map-web/map/application/getallapplication/');

  }
  getApplication(id) {
    return this.http.get<Application>('/map-web/map/application/getapplication?idapplication=' + id);

  }
}
