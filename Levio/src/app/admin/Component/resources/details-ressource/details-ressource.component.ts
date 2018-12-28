import {Component, OnDestroy, OnInit} from '@angular/core';
import {RessourceService} from '../../../services/ressource.service';
import {ActivatedRoute} from '@angular/router';
import {Ressource} from '../../../models/Ressource';

@Component({
  selector: 'app-details-ressource',
  templateUrl: './details-ressource.component.html',
  styleUrls: ['./details-ressource.component.css'],
  providers:[RessourceService]
})
export class DetailsRessourceComponent implements OnInit  {

  id: number;
  ObjectRessource:Ressource;
  constructor(private ServiceRessource: RessourceService,private route:ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];

  }


  ngOnInit() {



      this.ServiceRessource.getRessourceById(this.id).subscribe(data=> {
        this.ObjectRessource=data;
        console.log(data)});

  }

}


