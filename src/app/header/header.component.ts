import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() buttonText!:string;

  @Output() sendEmitter: EventEmitter<string> = new EventEmitter(); // Step1
searchText: string = "";// Step2 value to pass out to parent

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.buttonText);

  }
// aboutClick() {
//   // console.log("About is clicked");
//   this.router.navigate(['/about'])
// }

  submitSearch() {
    console.log(this.searchText);
    this.sendEmitter.emit(this.searchText); //Emission of value
  }

}
// Create two components (fruit, orange) ng g c <name>
// Create a relationship between them -- Note add path (parent component) to a routing
// in a child component (orange) design an input and a button,
// when a button is being clicked,
// pass the input value (if and only if it has some value) to the fruit and display in on the view
