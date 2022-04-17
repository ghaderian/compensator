import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isModalOpen = false;
  fadeIn = false;
  fadeOut = false;

  modalState: 'fade-in' | 'fade-out' | 'visible' | 'hidden' = 'hidden'

  constructor() { }

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

}
