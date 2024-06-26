import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  @Input() ndata: any;
  @Output() updateDataEvent: EventEmitter<string> = new EventEmitter<string>();

  
  onSubmit() {
    this.updateDataEvent.emit(this.ndata)
    this.ndata = '';

  }
}
