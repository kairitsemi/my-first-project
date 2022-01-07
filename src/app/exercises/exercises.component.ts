import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  @Input () displayValueFromParent: number = 0
  displayNumber: number = 1;
  counter = 0
  inputValue = ""

  numberValue: number = 1;
  stringValue: string = "";
  buttonState: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.displayNumber = this.displayNumber * this.displayNumber

  }

  onMultiply() {
    this.numberValue = this.numberValue * 5
    if (this.numberValue > 150 ) {
      this.buttonState = true;
      this.stringValue = "You've reached the limits"
    }
  }


}
