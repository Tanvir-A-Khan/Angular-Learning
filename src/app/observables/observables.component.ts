import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent {
  data: any = [];

  myObservables = new Observable((observable) => {
    setTimeout(() => {
      observable.next(1);
    }, 1000);
    setTimeout(() => {
      observable.next(2);
    }, 2000);
    setTimeout(() => {
      // observable.error(new Error('try again'));
    }, 3000);
    setTimeout(() => {
      observable.next(4);
    }, 4000);
    setTimeout(() => {
      observable.next(5);
    }, 5000);
    setTimeout(() => {
      observable.complete();
    }, 5000);
  });

  getAsyncObservables() {
    this.myObservables.subscribe({
      next: (data) => {
        this.data.push(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
