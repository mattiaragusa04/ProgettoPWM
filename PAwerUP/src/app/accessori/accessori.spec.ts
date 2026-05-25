import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessori } from './accessori';

describe('Accessori', () => {
  let component: Accessori;
  let fixture: ComponentFixture<Accessori>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessori],
    }).compileComponents();

    fixture = TestBed.createComponent(Accessori);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
