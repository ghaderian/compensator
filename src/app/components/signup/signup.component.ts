import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  formSubmitted = false;

  name = '';
  family = '';
  email = '';
  phone ='';



  constructor() { }

  ngOnInit(): void {

  }


  submit() {

    this.formSubmitted = true;
  }

}
