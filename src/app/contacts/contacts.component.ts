import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  data: string = '';
  data1: string = '';
  data2: string = '';
  data3: string = '';

  updateData(data:any):void {
    console.warn(data)
    this.data = data
  }

  updateWithData1(data:any):void {
    console.log('data updated: ', data);
    this.data2 = data;
    this.data3 = data;
  }

  updateWithData2(data:any):void {
    this.data1 = data;
    this.data3 = data;
  }

  updateWithData3(data:any):void {
    console.log('data updated: ', data);
    this.data1 = data;
    this.data2 = data;
  }
}
