import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueDaCidadeComponent } from './parque-da-cidade.component';

describe('ParqueDaCidadeComponent', () => {
  let component: ParqueDaCidadeComponent;
  let fixture: ComponentFixture<ParqueDaCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParqueDaCidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParqueDaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
