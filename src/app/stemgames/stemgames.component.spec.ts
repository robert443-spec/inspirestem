import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemgamesComponent } from './stemgames.component';

describe('StemgamesComponent', () => {
  let component: StemgamesComponent;
  let fixture: ComponentFixture<StemgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StemgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StemgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
