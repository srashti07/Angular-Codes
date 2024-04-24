import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes_url = 'http://localhost:3000/notes';
  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.notes_url);
  }
  addNote(toAdd:Note):Observable<Note>{
    return this.http.post<Note>(this.notes_url,toAdd);
  }
}

