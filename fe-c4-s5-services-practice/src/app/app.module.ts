import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { BlogService } from './services/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBlogComponent,
    ViewBlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 
    FormsModule
  ],
  providers: [BlogService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
