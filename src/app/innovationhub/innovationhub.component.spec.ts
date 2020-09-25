import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationhubComponent } from './innovationhub.component';

describe('InnovationhubComponent', () => {
  let component: InnovationhubComponent;
  let fixture: ComponentFixture<InnovationhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
