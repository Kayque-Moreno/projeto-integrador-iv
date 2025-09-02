import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testando } from './testando';

describe('Testando', () => {
  let component: Testando;
  let fixture: ComponentFixture<Testando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testando]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testando);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
