import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  @Input() ndata: any;
  @Output() updateDataEvent: EventEmitter<string> = new EventEmitter<string>();

  
  onSubmit() {
    this.updateDataEvent.emit(this.ndata);
    this.ndata = '';
  }

}
