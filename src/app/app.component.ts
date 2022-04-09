import { Component } from '@angular/core';
import { ModalService } from './components/_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compensator';
  constructor(public modalService:ModalService){}
}
