import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp01PipesComponent } from './cmp01-pipes.component';

describe('Cmp01PipesComponent', () => {
  let component: Cmp01PipesComponent;
  let fixture: ComponentFixture<Cmp01PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp01PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp01PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
