import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
numberValue: number = 50
inputValue: string = "";
  constructor() { }

  ngOnInit(): void {
    console.log("I'm in onInit Method");
    this.inputValue = "Hello world"
    console.log(this.inputValue);
// Allows us to make database calls (GET)
//store results[]
//added to class property
  }

  ngDoCheck() {
    console.log("DoCheck is run");

  }


  receveChildValue(value: string) {
    console.log(value);
  }


  // Cenerate two components named Microsoft and Linkedin
  // Create a parent-child relationship (Microsoft as a parent and LinkedIn as a child)
  // In Microsoft component, declare a string variable "You're doing so well" - you can have dummy view contents
  // in Linkedin receive a comment data from Microsoft. and display to the view
}
