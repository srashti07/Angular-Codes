import { Component, Input, OnInit } from '@angular/core';

import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() 
   note:Note={};
  
}


    
  
  
   





