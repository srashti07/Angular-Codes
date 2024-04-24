import { Component, OnInit,Input } from '@angular/core';
import { Note } from 'src/models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() Note: Note | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
