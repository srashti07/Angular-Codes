import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Notename:string ='';
@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

constructor() { }

ngOnInit(): void {
}
searchFruit() {
  this.searchTextChanged.emit(this.Notename);
}

clearSearch() {
  this.Notename = "";
  this.searchTextChanged.emit(this.Notename);
}
}


