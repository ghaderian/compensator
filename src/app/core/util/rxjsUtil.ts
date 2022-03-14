import { BehaviorSubject, Observable } from 'rxjs';

export class RxjsUtil {
  public static convertObservableToBehaviorSubject<T>(
    observable: Observable<T>,
    initValue: T
  ): BehaviorSubject<T> {
    const subject = new BehaviorSubject(initValue);

    observable.subscribe(
      (x: T) => {
        subject.next(x);
      },
      (err: any) => {
        subject.error(err);
      },
      () => {
        subject.complete();
      }
    );

    return subject;
  }
}
