import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02OutputComponent } from './cmp02-output.component';

describe('Cmp02OutputComponent', () => {
  let component: Cmp02OutputComponent;
  let fixture: ComponentFixture<Cmp02OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02OutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
