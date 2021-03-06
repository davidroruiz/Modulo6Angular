import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadPageComponent } from './ciudad-page.component';

describe('CiudadPageComponent', () => {
  let component: CiudadPageComponent;
  let fixture: ComponentFixture<CiudadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
