import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {


  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  @Output() noteAdded = new EventEmitter();
  @Output() hideNow = new EventEmitter();

  //note 
  note: Note = {}
  priority = ['Low', 'Medium', 'High', 'Critical'];

  minDate = new Date();
  see() {

    if (this.note.reminderDate) {
      const newDate = new Date(this.note.reminderDate)

      this.note.reminderDate = `${newDate.toISOString()}`
    }
    console.log(this.note);

  }
  saveNote() {

    this.noteService.addNote(this.note).subscribe(
      success => {
        // alert("Note Added")
        console.log(success);
        this.noteAdded.emit(this.note);
        // this.hideNow.emit();

        this.snackBar.open('Note added successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
      }
    )
    this.note = {}

  }
  cancel() {
    console.log("cancel");
    this.hideNow.emit();
  }
}
