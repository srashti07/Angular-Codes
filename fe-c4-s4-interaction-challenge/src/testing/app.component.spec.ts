import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { NoteComponent } from 'src/app/note/note.component';
import { SearchComponent } from 'src/app/search/search.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, NoteViewComponent, NoteAddComponent, SearchComponent, NoteComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('should render header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-header').length).toBe(1);
  });

  it('should render note-view component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-note-view').length).toBe(1);
  });

});
