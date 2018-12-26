import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { HttpClient } from '@angular/common/http';
import {Request} from '../../models/Request';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers : [RequestService]
})
export class RequestComponent implements OnInit {
  listRequests: Request[] = [];
  checkTreated: boolean;
  constructor(private httpClient: HttpClient) {
    this.checkTreated = false;
  }

  treatRequest(request: Request) {
    this.checkTreated = true;
    if (!request.status) {
      this.httpClient.get('/map-web/map/User/treatClientRequest?requestId='+request.id).subscribe();
      this.httpClient.get('/map-web/map/User/treatClientRequest?requestId='+request.id).subscribe();
    this.getAllRequests();
    }
    }

    deleteRequest(request: Request) {
    if (request.status) {
      this.httpClient.get('/map-web/map/client/DeleteRequest?id='+request.id).subscribe();
      this.httpClient.get('/map-web/map/client/DeleteRequest?id='+request.id).subscribe();
      this.getAllRequests();

    }
    }
  returnStatus(request: Request) {
    if (request.status) {
      this.checkTreated = true;
      return 'Treated';
    } else {
      this.checkTreated = false;
      return 'Not Treated';
    }
  }
  getAllRequests() {
    return this.httpClient.get<Request[]>('/map-web/map/User/getAllRequests').subscribe(data => {
          this.listRequests= data;
    });
  }
  ngOnInit() {
    this.getAllRequests();
  }

}
