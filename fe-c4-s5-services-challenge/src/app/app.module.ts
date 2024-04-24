import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoteAddComponent } from './note-add/note-add.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteViewComponent,
    NoteAddComponent,
    SearchComponent,
    HeaderComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
