import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ressource} from '../models/Ressource';

@Injectable()
export class RessourceService {

  constructor(private http: HttpClient) {

  }


  getRessources(){

    return this.http.get<Ressource>('/map-web/map/ressource');

  }

  getRessourceById(id){


    return this.http.get<Ressource>('/map-web/map/ressource?id=' + id);


  }


  public addRessource(p){
    return this.http.post<Ressource>('/map-web/map/ressource', p);
  }




}
