import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05RoutingComponent } from './cmp05-routing.component';

describe('Cmp05RoutingComponent', () => {
  let component: Cmp05RoutingComponent;
  let fixture: ComponentFixture<Cmp05RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
