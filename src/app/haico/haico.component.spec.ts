import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaicoComponent } from './haico.component';

describe('HaicoComponent', () => {
  let component: HaicoComponent;
  let fixture: ComponentFixture<HaicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
