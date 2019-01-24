import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSpecificComponent } from './book-specific.component';

describe('BookSpecificComponent', () => {
  let component: BookSpecificComponent;
  let fixture: ComponentFixture<BookSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
