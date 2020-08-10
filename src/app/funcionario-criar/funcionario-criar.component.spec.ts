import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCriarComponent } from './funcionario-criar.component';

describe('FuncionarioCriarComponent', () => {
  let component: FuncionarioCriarComponent;
  let fixture: ComponentFixture<FuncionarioCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
