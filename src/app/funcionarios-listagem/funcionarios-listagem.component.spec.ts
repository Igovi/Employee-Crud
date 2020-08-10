import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosListagemComponent } from './funcionarios-listagem.component';

describe('FuncionariosListagemComponent', () => {
  let component: FuncionariosListagemComponent;
  let fixture: ComponentFixture<FuncionariosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
