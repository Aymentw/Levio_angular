import { Component, OnInit } from '@angular/core';
import {RessourceService} from '../../../services/ressource.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Ressource} from '../../../models/Ressource';

@Component({
  selector: 'app-list-ressources',
  templateUrl: './list-ressources.component.html',
  styleUrls: ['./list-ressources.component.css'],
  providers:[RessourceService]

})
export class ListRessourcesComponent implements OnInit {


  ObjectRessource = new Ressource();
  ListRessources:Object;
  constructor(private ServiceRessource:RessourceService,public ngxSmartModalService: NgxSmartModalService) {

  }

  ngOnInit() {

    this.ServiceRessource.getRessources().subscribe(data=> {
      this.ListRessources=data;
      console.log(data)});

  }

  addRessource(ObjectRessource) {

    this.ServiceRessource.addRessource(ObjectRessource).subscribe(data => console.log('ok'));

  }


}
