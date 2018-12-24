import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { HttpClient } from '@angular/common/http';
import {Request} from '../../modele/Request';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers : [RequestService]
})
export class RequestComponent implements OnInit {
  listRequests: Request[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllRequests(): Observable<Request[]> {
    return this.httpClient.get<Request[]>('/map-web/map/User/getAllRequests').map(result => result as Request[]);
  }
  ngOnInit() {
   // this.getAllRequests().subscribe((result) => {
     // for (const request in result) {
       // this.listRequests.push([request, result[request]]);
      }
    // });
  // }

}
