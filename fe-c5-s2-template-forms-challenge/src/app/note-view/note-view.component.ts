import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
// import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes()
    this.toggleAdd=false;
  }
  notesMaster:Note[] = [];
  toggleAdd=false;
  
  notes?:Note[] = [];

  async searchNote(searchText:string){
    console.log( searchText );
    const response = await this.getNotes()

    if(response){
      if (searchText === '' || !searchText){
          this.notes = [...this.notesMaster];        
      }
      else {
          this.notes = [...this.notesMaster];
          const filterdNotes = this.notes.filter(note => note.title?.startsWith(searchText.toLowerCase()));
          this.notes=filterdNotes; 
        }
    }
  }
  getNotes():Promise<any>{
    return new Promise( (reslove,reject)=>{

      this.noteService.getNotes().subscribe(
        success=>{
            this.notes = success;
            
            this.notesMaster=[...this.notes]
            reslove(true);


        },
        error=>{
          alert("Failed to Fetch Notes Due to Server Error !!")
          reject(false)        
        }
      )    
  
    } )
      
  }

  addNotesBtnClicked(){
    console.log("note added");
    this.toggleAdd = true;

  }
  hideNotes(){
    console.log("notes hidden");
    
    this.toggleAdd= false;
  }
}
