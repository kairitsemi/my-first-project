import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
@Input() value!: number
@Output() sendValue: EventEmitter<string> =new EventEmitter();
stringValue: string = "Kairit Semiskar";
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log("onChanges is called");

  }

headerClick() {
  this.sendValue.emit(this.stringValue);
}

ngOnDestroy() {
  console.log("I'm leaving the component");

}
}
