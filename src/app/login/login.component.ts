import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Users : any = []; 
editusers: any [];
  constructor(private service:SubjectsService) { }

  ngOnInit() {
    this.service.name.subscribe(xyz => this.Users = xyz);

    this.setData();
    this.getData();
    // this.data();
  }
  setData() {
    this.service.access_token="abcyhjj334444444";
  }
  getData(){
    console.log(this.service.access_token)
 }

data(){
  this.service.editUser(this.editusers);
}

}