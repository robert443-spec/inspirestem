import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemambassodorsComponent } from './stemambassodors.component';

describe('StemambassodorsComponent', () => {
  let component: StemambassodorsComponent;
  let fixture: ComponentFixture<StemambassodorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StemambassodorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StemambassodorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
