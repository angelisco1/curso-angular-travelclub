import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { VendeHumos } from 'src/app/types/vendehumos';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { InicioComponent } from './inicio.component';

fdescribe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let mockVhService: any

  beforeEach(async () => {
    mockVhService = jasmine.createSpyObj(VendehumosService, ['getVendehumos'])

    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: VendehumosService, useValue: mockVhService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de pintarse 3 vendehumos', () => {
    const mockVendehumos = [new VendeHumos('', '', '', 0, 0), new VendeHumos('', '', '', 0, 1)]
    mockVhService.getVendehumos.and.returnValue(of(mockVendehumos))

    fixture.detectChanges();

    console.log(component.listaVendehumos)
    expect(component.listaVendehumos).toHaveSize(2)
  })
});
