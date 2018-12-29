import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/Project";
import {NgxSmartModalService} from "ngx-smart-modal";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  projects: Project[] = null;
  clients: Client[] = null;

  constructor(private projectService : ProjectService, private http:HttpClient,  public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data => { this.projects=data});
    this.projectService.getClients().subscribe(res => { this.clients =res});
  }

  deleteProject(id){
    this.projectService.deleteProject(id).subscribe(data => console.log('ok'));
    this.projectService.getAllProjects().subscribe(data => { this.projects=data});
  }

  project: Project = new Project();
  addProject(p){
    this.projectService.addProject(p).subscribe(data => console.log('ok'));
    this.projectService.getAllProjects().subscribe(data => { this.projects=data});
  }

  updateProject(pr){
    this.projectService.updateProject(pr).subscribe(data => console.log('ok'));

  }

  updateproject: Project = new Project();
  selectproject(p){
    this.updateproject = p;
  }
}
