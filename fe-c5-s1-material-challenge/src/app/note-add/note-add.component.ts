import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../models/note';
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
   noteAdded :EventEmitter<any>=new EventEmitter<any>();

  note:Note={}

  addNote(){
    this.noteService.addNote(this.note).subscribe(
      success=>{
        alert("Note Added")
        console.log(success);
        this.noteAdded.emit(this.note);
      }
    ) 
  }
}
