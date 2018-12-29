import { Component, OnInit } from '@angular/core';
import {MandatService} from '../../services/mandat.service';
import {Mandat} from '../../models/Mandat';
import {Ressource} from '../../models/Ressource';
import {Project} from '../../models/Project';

@Component({
  selector: 'app-mandats',
  templateUrl: './mandats.component.html',
  styleUrls: ['./mandats.component.css'],
  providers: [MandatService]
})

export class MandatsComponent implements OnInit {

  cols: any[];
  mandat: Mandat;
  _mandat :Mandat[]=[];
  mandats :Mandat[];
  project: Project;
  ressource: Ressource;
  constructor( private mandatService: MandatService  ) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.cols = [
      { field: 'StartDate', header: 'Start Date ' },
      { field: 'EndDate', header: 'End Date' },
      { field: 'ProjectName', header: 'Project Name' },
      { field: 'RessourceName', header: 'Ressource Name' }
  ];
    this.mandat = new Mandat();
    this.project = new Project();
    this.ressource = new Ressource();
     
     
    this.mandatService.getAll().subscribe(data => {

        for (let key in data){
          this.mandat=data[key];
          this._mandat.push(this.mandat);
          console.log(data[key]);
        }
        console.log(this._mandat)
      }
    );
  }

}
