import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css'],
  providers: [MessageService],
})
export class User3Component {
  constructor(private mesService: MessageService) {
    this.mesService = mesService;
  }
  data: string = this.mesService.message;
  broadcastMessage() {
    this.mesService.sendMessage('user 3 ' + this.data);

    console.log(this.data);
  }
}
