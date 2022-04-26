import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04ValidacionesFormComponent } from './cmp04-validaciones-form.component';

describe('Cmp04ValidacionesFormComponent', () => {
  let component: Cmp04ValidacionesFormComponent;
  let fixture: ComponentFixture<Cmp04ValidacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04ValidacionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04ValidacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
