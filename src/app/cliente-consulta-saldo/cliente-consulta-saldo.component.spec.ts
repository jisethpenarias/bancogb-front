import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsultaSaldoComponent } from './cliente-consulta-saldo.component';

describe('ClienteConsultaSaldoComponent', () => {
  let component: ClienteConsultaSaldoComponent;
  let fixture: ComponentFixture<ClienteConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteConsultaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
