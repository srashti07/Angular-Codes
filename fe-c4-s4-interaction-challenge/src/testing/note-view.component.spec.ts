import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';

import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { NoteComponent } from 'src/app/note/note.component';
import { SearchComponent } from 'src/app/search/search.component';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NoteViewComponent, NoteComponent, SearchComponent, NoteAddComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 5 notes when the app is launched', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-note').length).toBe(5);
  });

  it('should render search component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-search').length).toBe(1);
  });

  it('should render note-add component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-note-add').length).toBe(1);
  });

});
