import { Component, OnInit } from '@angular/core';
import {RessourceService} from '../../../services/ressource.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Ressource} from '../../../models/Ressource';
import {HttpClient} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-list-ressources',
  templateUrl: './list-ressources.component.html',
  styleUrls: ['./list-ressources.component.css'],
  providers:[RessourceService]

})
export class ListRessourcesComponent implements OnInit {


  selectedFile = null;
  ObjectRessource = new Ressource();
  ListRessources: any;
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService,private ServiceRessource:RessourceService,public ngxSmartModalService: NgxSmartModalService,private http:HttpClient) {

    this.notifier = notifierService;


  }

  ngOnInit() {

    this.ServiceRessource.getRessources().subscribe(data=> {
      this.ListRessources=data;
      console.log(data)});

  }

  addRessource(ObjectRessource) {

    this.ServiceRessource.addRessource(ObjectRessource).subscribe(data => console.log('ok'));
    this.notifier.show( {
      type: 'success',
      message: 'Ressource successfully added',
      id: 'THAT_NOTIFICATION_ID'
    } );
    this.ListRessources.push(ObjectRessource);



  }


  deleteRessource(id,ressource) {

    console.log(id);
    this.ServiceRessource.deleteRessource(id).subscribe(data => console.log('ok'));
    this.notifier.show( {
      type: 'success',
      message: 'Ressource successfully deleted',
      id: 'THAT_NOTIFICATION_ID'
    } );
    this.ListRessources.splice(this.ListRessources.indexOf(ressource), 1);



  }


}
