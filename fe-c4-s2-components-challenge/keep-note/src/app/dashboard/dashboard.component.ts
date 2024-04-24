import { Component } from '@angular/core';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
searchText:string = "";
notes = NOTES;

search(){
  if(this.searchText === '' || !this.searchText){
  this.notes = NOTES;}
  else{
    this.notes = NOTES;
    this.notes = this.notes.filter(note => note.title?.startsWith(this.searchText.toLowerCase()));
  }
}
}