import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    if(this.note.reminderDate){
      this.reminder = new Date( this.note.reminderDate )
      this.reminderDisplay=  `${this.reminder.toISOString().split('T')[0]} ${this.reminder.toLocaleTimeString().toUpperCase()}`;
    }
  }
  reminder:Date=new Date();
  reminderDisplay="";
  @Input() note:Note={};
  
  showBtns=false;
  isHidden=true;

  setVisibility(){
    this.showBtns =!this.showBtns;
  }
}
