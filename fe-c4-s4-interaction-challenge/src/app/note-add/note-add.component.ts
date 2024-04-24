import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/models/Notes';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  newNote = { title: '', content: '' };

  addNote() {
    Notes.push({
      id: Notes.length + 1,
      title: this.newNote.title,
      content: this.newNote.content
    });
    this.newNote.title = '';
    this.newNote.content = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
