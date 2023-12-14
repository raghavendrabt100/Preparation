import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsDetailsComponent } from './produts-details.component';

describe('ProdutsDetailsComponent', () => {
  let component: ProdutsDetailsComponent;
  let fixture: ComponentFixture<ProdutsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProdutsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
