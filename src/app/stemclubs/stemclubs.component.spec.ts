import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemclubsComponent } from './stemclubs.component';

describe('StemclubsComponent', () => {
  let component: StemclubsComponent;
  let fixture: ComponentFixture<StemclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StemclubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StemclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
