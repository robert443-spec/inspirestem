import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemlibraryComponent } from './stemlibrary.component';

describe('StemlibraryComponent', () => {
  let component: StemlibraryComponent;
  let fixture: ComponentFixture<StemlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StemlibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StemlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
