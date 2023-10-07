import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoHamburguerComponent } from './secao-hamburguer.component';

describe('SecaoHamburguerComponent', () => {
  let component: SecaoHamburguerComponent;
  let fixture: ComponentFixture<SecaoHamburguerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoHamburguerComponent]
    });
    fixture = TestBed.createComponent(SecaoHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
