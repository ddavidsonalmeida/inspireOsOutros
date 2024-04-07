import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosEmAndamentoComponent } from './projetos-em-andamento.component';

describe('ProjetosEmAndamentoComponent', () => {
  let component: ProjetosEmAndamentoComponent;
  let fixture: ComponentFixture<ProjetosEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosEmAndamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
