import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = '__';

  //   getMessage(): string {
  //     return this.message;
  //   }

  sendMessage(message: string): void {
    this.message = message;
    // alert(message);
    console.log(this.message);
  }
}
