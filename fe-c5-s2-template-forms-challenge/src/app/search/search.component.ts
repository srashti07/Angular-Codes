import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isHidden=false;

  searchText: string ="";
  @Output() noteSearched:EventEmitter<any>=new EventEmitter<any>();

  startSearch(){
    this.noteSearched.emit(this.searchText);
  }

}
