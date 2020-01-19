import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  useres:any=[];
  constructor(private service:SubjectsService) { }

  ngOnInit() {
    this.service.name.subscribe(xyz => this.useres = xyz)
    this.getData();
  }
  getData() {
    console.log("Profile Component");
    console.log(this.service.access_token)
  }

  data(){
  }
}
