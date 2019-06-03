import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnapiComponent } from './ownapi.component';

describe('OwnapiComponent', () => {
  let component: OwnapiComponent;
  let fixture: ComponentFixture<OwnapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
