import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../models/Project";
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {



  constructor(private http: HttpClient) {
  }

  public getAllProjects() {
    return this.http.get<Project[]>('/map-web/map/project/projects/');

  }



}
