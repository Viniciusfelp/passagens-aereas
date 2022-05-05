import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarVooComponent } from './selecionar-voo.component';

describe('SelecionarVooComponent', () => {
  let component: SelecionarVooComponent;
  let fixture: ComponentFixture<SelecionarVooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarVooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
