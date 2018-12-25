import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/Project";
import {NgxSmartModalService} from "ngx-smart-modal";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  projects: Project[] = null;

  constructor(private projectService : ProjectService, private http:HttpClient,  public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data => { this.projects=data});
  }

}
