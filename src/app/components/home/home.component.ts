import { Component, OnInit } from '@angular/core';
import { RequestDocument } from 'src/app/core/model/request.document';
import { RequestService } from 'src/app/core/request.service';
import { CoreUtil } from 'src/app/core/util/coreUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email = '';
  isEmailValid = true;

  modalState: 'fade-in' | 'fade-out' | 'visible' | 'hidden' = 'hidden'

  private service: RequestService

  constructor(service: RequestService) {
    this.service = service;
  }

  ngOnInit(): void {

  }

  showModal() {
    this.modalState = 'fade-in'
    setTimeout(() => {
      this.modalState = 'visible'
    },1000);
  }


  closeModal() {
    this.modalState = 'fade-out'
    setTimeout(() => {
      this.modalState = 'hidden'
    },1000);
  }

  submit() {

    this.isEmailValid = CoreUtil.validateEmail(this.email);

    if (this.isEmailValid) {

      const req: RequestDocument = {
        email : this.email,
        family: '',
        name: '',
        time: Date.now()
      }
      this.service.createRequst(req);

      this.closeModal();

    }

  }

}
