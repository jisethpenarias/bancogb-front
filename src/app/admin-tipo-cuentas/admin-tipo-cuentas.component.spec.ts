import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoCuentasComponent } from './admin-tipo-cuentas.component';

describe('AdminTipoCuentasComponent', () => {
  let component: AdminTipoCuentasComponent;
  let fixture: ComponentFixture<AdminTipoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipoCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
