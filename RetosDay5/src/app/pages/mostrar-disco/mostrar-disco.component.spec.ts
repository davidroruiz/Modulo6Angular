import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDiscoComponent } from './mostrar-disco.component';

describe('MostrarDiscoComponent', () => {
  let component: MostrarDiscoComponent;
  let fixture: ComponentFixture<MostrarDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
