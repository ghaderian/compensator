import { Component, OnInit } from '@angular/core';
import { RequestDocument } from 'src/app/core/model/request.document';
import { RequestService } from 'src/app/core/request.service';
import { RequestsComponent } from '../requests/requests.component';

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

  private service: RequestService

  constructor(service: RequestService) {
    this.service = service;
  }

  ngOnInit(): void {

  }


  submit() {

    const req: RequestDocument = {
      email : this.email,
      family: this.family,
      name: this.name,
      time: Date.now()
    }
    this.service.createRequst(req)
    this.formSubmitted = true;
  }

}
