import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVooComponent } from './buscar-voo.component';

describe('BuscarVooComponent', () => {
  let component: BuscarVooComponent;
  let fixture: ComponentFixture<BuscarVooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
