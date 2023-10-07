import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDescricaoComponent } from './secao-descricao.component';

describe('SecaoDescricaoComponent', () => {
  let component: SecaoDescricaoComponent;
  let fixture: ComponentFixture<SecaoDescricaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoDescricaoComponent]
    });
    fixture = TestBed.createComponent(SecaoDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
