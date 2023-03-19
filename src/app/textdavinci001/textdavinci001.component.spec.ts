import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textdavinci001Component } from './textdavinci001.component';

describe('Textdavinci001Component', () => {
  let component: Textdavinci001Component;
  let fixture: ComponentFixture<Textdavinci001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textdavinci001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textdavinci001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
