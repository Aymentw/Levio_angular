import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
  currentRole: string;
  constructor() { }

  ngOnInit() {
    this.currentRole = localStorage.getItem('role');
  }

}
