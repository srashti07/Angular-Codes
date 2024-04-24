import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Note } from 'src/app/models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  constructor(private noteService:NoteService) { }
  ngOnInit(): void {
  }
  @Output()
  onAdded: EventEmitter<Note> = new EventEmitter<Note>();

  
  note:Note={}

  addNote(){
    this.noteService.addNote(this.note).subscribe(
      success=>{
        alert("Note Added")
        console.log(success);
        this.note={}
      }
    ) 
  }
}



