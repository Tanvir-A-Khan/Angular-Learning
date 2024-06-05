import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  @Input() ndata: any;
  @Output() updateDataEvent: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.updateDataEvent.emit(this.ndata);
    console.log("log "+ this.ndata);
    this.ndata = '';
  }



}
