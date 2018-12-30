import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../models/Client";
import {NgxSmartModalService} from "ngx-smart-modal";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {

  constructor(private clientService : ClientService, private http : HttpClient, public ngxSmartModalService: NgxSmartModalService) { }

  clients: Client[] = null;

  ngOnInit() {
    this.clientService.getAllClients().subscribe(data => { this.clients=data});
  }

  client: Client = new Client();
  addClient(c){
    this.clientService.addClient(c).subscribe(data => console.log('ok'));
    this.clientService.getAllClients().subscribe(data => { this.clients=data});
  }

  deleteClient(id){
    this.clientService.deleteClient(id).subscribe(data => console.log('ok'));
    this.clientService.getAllClients().subscribe(data => { this.clients=data});
  }

}
