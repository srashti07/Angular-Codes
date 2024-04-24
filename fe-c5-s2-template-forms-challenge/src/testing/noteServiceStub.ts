import { of } from "rxjs";
import { Note } from "../app/models/note";

export class NoteServiceStub {
    getNotes() {
        console.log("getNotes() from stub is called");
        return of([] as Note[]);
    }

    addNote(note:Note) {
        console.log("addNote() from stub is called");
        return of({} as Note);
    }
}
