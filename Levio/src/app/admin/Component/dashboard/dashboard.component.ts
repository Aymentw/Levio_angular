import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import 'jquery-knob';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  listSkills: Object;
  mostProfitProject: Object;
  mostProfitClient: Object;
  numresmandate: Object;
  numresintermandate: Object;
  numresadmin: Object;
  numreslevio: Object;
  numresfreelance: Object;
  reclamations: Object;
  satisfactions: Object;
  satisfactionRate: Object;
  listresources: Object;
  listprojects: Object;
  listmandates: Object;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    $(function() {
      $(".knob").knob({
        /*change : function (value) {
         //console.log("change : " + value);
         },
         release : function (value) {
         console.log("release : " + value);
         },
         cancel : function () {
         console.log("cancel : " + this.value);
         },*/
        draw: function () {

          // "tron" case
          if (this.$.data('skin') == 'tron') {

            var a = this.angle(this.cv)  // Angle
              , sa = this.startAngle          // Previous start angle
              , sat = this.startAngle         // Start angle
              , ea                            // Previous end angle
              , eat = sat + a                 // End angle
              , r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor
            && (sat = eat - 0.3)
            && (eat = eat + 0.3);

            if (this.o.displayPrevious) {
              ea = this.startAngle + this.angle(this.value);
              this.o.cursor
              && (sa = ea - 0.3)
              && (ea = ea + 0.3);
              this.g.beginPath();
              this.g.strokeStyle = this.previousColor;
              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
              this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
          }
        }
      });
    });
    this.dashboardService.getSkills().subscribe(
      data => {
        this.listSkills = data;
      });
    this.dashboardService.getMostProfitProject().subscribe(
      data => {
        this.mostProfitProject = data;
      });
    this.dashboardService.getMostProfitClient().subscribe(
      data => {
        this.mostProfitClient = data;
      });
    this.dashboardService.getNumResMandates().subscribe(
      data => {
        this.numresmandate = data;
      });
    this.dashboardService.getNumResInterMandate().subscribe(
      data => {
        this.numresintermandate = data;
      });
    this.dashboardService.getNumResAdmin().subscribe(
      data => {
        this.numresadmin = data;
      });
    this.dashboardService.getNumResLevio().subscribe(
      data => {
        this.numreslevio = data;
      });
    this.dashboardService.getNumResFreelance().subscribe(
      data => {
        this.numresfreelance = data;
      });
    this.dashboardService.getNumReclamations().subscribe(
      data => {
        this.reclamations = data;
      });
    this.dashboardService.getNumSatisfactions().subscribe(
      data => {
        this.satisfactions = data;
      });
    this.dashboardService.getSatisfactionRate().subscribe(
      data => {
        this.satisfactionRate = data;
      });
    this.dashboardService.getResources().subscribe(
      data => {
        this.listresources = data;
      });
    this.dashboardService.getProjects().subscribe(
      data => {
        this.listprojects = data;
      });
    this.dashboardService.getMandates().subscribe(
      data => {
        this.listmandates = data;
      });
  }

}
