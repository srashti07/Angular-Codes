import { Component, OnInit } from '@angular/core';

import { Note } from 'src/app/models/note';
import { NoteService } from '../services/note.service';
import { NOTES } from 'src/app/models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes:Note[]= NOTES; 
 
    // []=[];
//  filternotesdata:any[]=[];
//    constructor(private noteService:NoteService) { }
//   ngOnInit(): void {
//     this.noteService.getNotes().subscribe(data=>
//         this.notes=data)
//   }
//   getNotes() {
//       this.noteService.getNotes().subscribe(
//         (data)=>{
//          this.notes = data;
//          this.filternotesdata=data;

//         },
//         (error) => {
//           alert(error.message)
//         }
//       )
//     }
    
//   // notes? :Note[]=NOTES;

//   searchNote(searchnote:string)
//   {
//     if(searchnote)
//     {
//       this.filternotesdata=this.notes.filter(note=>note.title.includes(searchnote))
//     }
//     else
//     {
//       this.filternotesdata=this.notes;
//     }
//   }
 
// }
// constructor(private fruitService: FruitService) {

constructor(private noteService:NoteService) { }
ngOnInit(): void {
  this.noteService.getNotes().subscribe(data => {
    this.notes = data;
  })
}
  
onFruitAdded(note: Note) {
  this.notes.push(note);
}

 
onSearchTextChanged(Notename: string) {
  if(Notename === '' || !Notename)
  {
    this.notes = NOTES;
  }
  else
  {
    this.notes = NOTES;
    this.notes= this.notes.filter(fruit => fruit.title?.includes(Notename));
  }

}

}
