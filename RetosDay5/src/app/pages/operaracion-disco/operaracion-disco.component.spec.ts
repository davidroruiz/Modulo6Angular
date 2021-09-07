import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaracionDiscoComponent } from './operaracion-disco.component';

describe('OperaracionDiscoComponent', () => {
  let component: OperaracionDiscoComponent;
  let fixture: ComponentFixture<OperaracionDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperaracionDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaracionDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
