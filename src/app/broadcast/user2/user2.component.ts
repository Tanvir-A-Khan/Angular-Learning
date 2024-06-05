import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css'],
  providers: [MessageService],
})
export class User2Component {
  constructor(private mesService: MessageService) {
    this.mesService = mesService;
  }
  data: string = this.mesService.message;
  broadcastMessage() {
    this.mesService.sendMessage('user 2 ' + this.data);

    // console.log(this.data);
  }
}
