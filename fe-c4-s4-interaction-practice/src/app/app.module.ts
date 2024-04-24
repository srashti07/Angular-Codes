import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AppComponent } from './app.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactAddComponent,
    ContactCardComponent,
    ContactContainerComponent,
    HeaderComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
