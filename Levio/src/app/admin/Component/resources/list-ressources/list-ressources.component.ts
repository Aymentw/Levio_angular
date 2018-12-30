import { Component, OnInit } from '@angular/core';
import {RessourceService} from '../../../services/ressource.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Ressource} from '../../../models/Ressource';
import {HttpClient} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";


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

  public downloadPdf()
  {
    var data = document.getElementById('pdfpart');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 150;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 25;
      pdf.text(40, 15, 'Ressources');
      pdf.addImage(contentDataURL, 'PNG', 25, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF

    });
  }

}
