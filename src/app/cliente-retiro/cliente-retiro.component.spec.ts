import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRetiroComponent } from './cliente-retiro.component';

describe('ClienteRetiroComponent', () => {
  let component: ClienteRetiroComponent;
  let fixture: ComponentFixture<ClienteRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteRetiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
