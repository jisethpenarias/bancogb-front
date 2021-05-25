import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransaccionesComponent } from './admin-transacciones.component';

describe('AdminTransaccionesComponent', () => {
  let component: AdminTransaccionesComponent;
  let fixture: ComponentFixture<AdminTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
