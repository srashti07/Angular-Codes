import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient: HttpClient) { }
  addNote(note:Note):Observable<Note>{
   return this.httpclient.post<Note>("http://localhost:3000/notes", note);
  }
  getNotes():Observable<Note[]>{
    return this.httpclient.get<Note[]>("http://localhost:3000/notes");
  }
}




