import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './header/header.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { SearchComponent } from './search/search.component';
import { NoteComponent } from './note/note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteAddComponent,
    NoteViewComponent,
    SearchComponent,
    NoteComponent,
    NavbarComponent
  ],
  imports: [

    MatRadioModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
