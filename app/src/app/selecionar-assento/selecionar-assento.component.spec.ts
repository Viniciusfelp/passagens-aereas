import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarAssentoComponent } from './selecionar-assento.component';

describe('SelecionarAssentoComponent', () => {
  let component: SelecionarAssentoComponent;
  let fixture: ComponentFixture<SelecionarAssentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarAssentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarAssentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
