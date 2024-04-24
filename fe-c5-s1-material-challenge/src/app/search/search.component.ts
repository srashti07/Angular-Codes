import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NOTES } from '../models/notes';
import { Note } from '../models/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    notes:Note[] = NOTES;
    searchText: string ="";

    @Output() noteSearched:EventEmitter<any>=new EventEmitter<any>();

    startSearch(){
      this.noteSearched.emit(this.searchText);
    }
}
