import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsGroupComponent } from './commits-group.component';

describe('CommitsGroupComponent', () => {
  let component: CommitsGroupComponent;
  let fixture: ComponentFixture<CommitsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitsGroupComponent]
    });
    fixture = TestBed.createComponent(CommitsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
