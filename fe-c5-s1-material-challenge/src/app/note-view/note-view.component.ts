import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { Observable } from 'rxjs';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes() {
      this.noteService.getNotes().subscribe(
        success=>{
         this.notes = success;
        },
        (error) => {
          alert(error.message)
        }
      )
    }
  
  notes? :Note[]=NOTES;

 searchNote($event:any)
  {
    if($event==''||$event==null)
    {
      this.notes=NOTES;
    }
    else{
      this.notes=NOTES;
      this.notes=this.notes.filter((item)=>{
        const titleCaps=item.title?.toUpperCase();
        const eventCaps=$event.toUpperCase();
        return titleCaps?.startsWith(eventCaps);
        // title.startswith(searchtext)
      })

    }
  }
}
  
  