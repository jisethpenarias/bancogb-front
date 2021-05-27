import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClientesUpdateComponent } from './dialog-clientes-update.component';

describe('DialogClientesUpdateComponent', () => {
  let component: DialogClientesUpdateComponent;
  let fixture: ComponentFixture<DialogClientesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClientesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClientesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
