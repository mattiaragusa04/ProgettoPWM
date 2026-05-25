import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogiochi } from './videogiochi';

describe('Videogiochi', () => {
  let component: Videogiochi;
  let fixture: ComponentFixture<Videogiochi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videogiochi],
    }).compileComponents();

    fixture = TestBed.createComponent(Videogiochi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
