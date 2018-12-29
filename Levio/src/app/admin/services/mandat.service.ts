import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Mandat } from '../models/Mandat';



@Injectable()
export class MandatService {


  constructor(private http: HttpClient) { }
  getAll() {
     return this.http.get<Mandat[]>('/map-web/map/mandate');
  }
  GetById(id: number) {
    return this.http.get<any>('/map-web/map/mandate' + id);
  }
}
