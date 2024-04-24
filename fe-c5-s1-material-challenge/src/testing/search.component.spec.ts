import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from 'src/app/search/search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule, MatIconModule],
      declarations: [SearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain material input and button with search icon to implement search functionality', () => {
    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('mat-form-field'))).toBeTruthy();
    expect((debugElement.query(By.css("mat-icon")).nativeElement as HTMLElement)
      .textContent)
      .toEqual("search");
  });

});
