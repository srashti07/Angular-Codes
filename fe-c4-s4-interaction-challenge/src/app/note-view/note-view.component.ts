import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/models/Notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes = Notes;
  filteredNotes = Notes;

  handleSearch(searchInput: string) {
    if (searchInput) {
      this.filteredNotes = this.notes.filter(note =>
        note.title.includes(searchInput)
      );
    } else {
      this.filteredNotes = this.notes;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
