import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarVoosComponent } from './cancelar-voos.component';

describe('CancelarVoosComponent', () => {
  let component: CancelarVoosComponent;
  let fixture: ComponentFixture<CancelarVoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarVoosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarVoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
