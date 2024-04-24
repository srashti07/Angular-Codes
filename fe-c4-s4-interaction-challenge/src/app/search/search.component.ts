import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  searchInput: string = '';

  search() {
    this.searchEvent.emit(this.searchInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
