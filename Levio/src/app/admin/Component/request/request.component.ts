import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { RequestService } from '../../services/request.service';
import { HttpClient } from '@angular/common/http';
import {Request} from '../../models/Request';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import {interval} from 'rxjs/observable/interval';
import { Subscription } from 'rxjs';
import {Directive} from '@angular/core';
import {Router} from '@angular/router';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css', './table.scss'],
  providers : [RequestService]
})
export class RequestComponent implements OnInit,AfterViewInit, AfterViewChecked {
  subscription: Subscription;
  mySource:any =  interval(10000);
  listRequests: Request[] = [];
  buldAction: boolean;
  message: Message;
  constructor(private httpClient: HttpClient) {
    this.message = new Message();
  }

  returnTreatAction(request: Request) {
    if (request.status) {
      return 'close';
    }
    return 'check';
  }
  treatRequest(request: Request) {
    if (!request.status) {
      this.httpClient.get('/map-web/map/User/treatClientRequest?requestId='+request.id).subscribe(data => data,err => console.log('err'));
    this.getAllRequests();
    }
    }

    sendMessage(message: Message) {
    this.message.messageType = 'satisfaction';
    this.httpClient.post('/map-web/ressource/sendMessageToClient',JSON.stringify(message)).subscribe();
    }

    deleteRequest(request: Request) {
    if (request.status) {
      this.httpClient.get('/map-web/map/client/DeleteRequest?id='+request.id).subscribe(data => data,err => console.log('err'));
      this.httpClient.get('/map-web/map/client/DeleteRequest?id='+request.id).subscribe(data => data,err => console.log('err'));
      this.getAllRequests();

    }
    }
  returnStatus(request: Request) {
    if (request.status) {
      return 'Treated';
    } else {
      return 'Not Treated';
    }
  }
  getAllRequests() {
    return this.httpClient.get<Request[]>('/map-web/map/User/getAllRequests').subscribe(data => {
          this.listRequests= data;
    });
  }
  deleteTreatedRequests() {
        this.httpClient.get('/map-web/User/deleteTreatedRequets').subscribe(data => data,err => console.log('err') );
    }
  treatAllRequests() {
    for (const request of this.listRequests) {
      if (!request.status) {
        this.treatRequest(request);
      }
    }
  }

  sendMsg() {
    this.sendMessage(this.message);
  }

  getMessageDetails(request: Request) {
    this.message.toUserEmail = request.clients[0].email;
    $('#recipient-name').val(this.message.reciepient);
    this.message.subject = 'Request of resource for project:' + request.context;
    $('#subject').val(this.message.subject);
  }
  showClientProfile(request: Request) {

  }
  ngOnInit() {
    this.getAllRequests();
    $('.msg-button').css('background-color','yellow');

  }

  ngAfterViewInit() {
   // this.subscription = this.mySource.subscribe(val => this.getAllRequests());

  }
  ngAfterViewChecked() {
    $('.msg-button').css('background-color','orange');
    $('.profile-button').css('background-color','grey');

  }

}
