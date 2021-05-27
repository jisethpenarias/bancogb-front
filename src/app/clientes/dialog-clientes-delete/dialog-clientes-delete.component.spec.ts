import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClientesDeleteComponent } from './dialog-clientes-delete.component';

describe('DialogClientesDeleteComponent', () => {
  let component: DialogClientesDeleteComponent;
  let fixture: ComponentFixture<DialogClientesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClientesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClientesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
