import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrestoComponent } from './searchresto.component';

describe('SearchrestoComponent', () => {
  let component: SearchrestoComponent;
  let fixture: ComponentFixture<SearchrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
