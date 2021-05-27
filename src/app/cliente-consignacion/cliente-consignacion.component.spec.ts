import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsignacionComponent } from './cliente-consignacion.component';

describe('ClienteConsignacionComponent', () => {
  let component: ClienteConsignacionComponent;
  let fixture: ComponentFixture<ClienteConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteConsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
