import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from 'src/app/note/note.component';

import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use material card component', ()=>{
    expect(fixture.debugElement.query(By.css("mat-card"))).toBeTruthy();
  });
});
