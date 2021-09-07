import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCasiCrudComponent } from './formulario-casi-crud.component';

describe('FormularioCasiCrudComponent', () => {
  let component: FormularioCasiCrudComponent;
  let fixture: ComponentFixture<FormularioCasiCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCasiCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCasiCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
