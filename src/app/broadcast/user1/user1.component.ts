import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css'],
  providers: [MessageService],
})
export class User1Component {
  data: string = '';
  // mesService: MessageService;

  constructor(private mesService: MessageService) {
    this.mesService = mesService;
  }
  broadcastMessage() {
    this.mesService.sendMessage('user 1 ' + this.data);

    console.log(this.data);
  }
}
