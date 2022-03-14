import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RequestDocument } from 'src/app/core/model/request.document';
import { RequestService } from 'src/app/core/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {


  requests$ :BehaviorSubject<RequestDocument[]> ; 

  constructor(service: RequestService) { 

    this.requests$ = service.requests$;
  }

  ngOnInit(): void {
  }

}
