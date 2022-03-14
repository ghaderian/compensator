import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestDocument } from './model/request.document';
import { Firestore, collectionData, collection, addDoc, CollectionReference } from '@angular/fire/firestore';
import { RxjsUtil } from './util/rxjsUtil';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public requests$: BehaviorSubject<RequestDocument[]>;
  public requestCollection: CollectionReference | undefined;

  constructor(firestore: Firestore) {
    this.requestCollection = collection(firestore, 'requests');
    const data = collectionData(this.requestCollection) as Observable<RequestDocument[]>;
    this.requests$ = RxjsUtil.convertObservableToBehaviorSubject<RequestDocument[]>(data,[]);
  }



  createRequst(request: RequestDocument): void {

    if (this.requestCollection) {
      addDoc(this.requestCollection, request);
    }

  }



}
