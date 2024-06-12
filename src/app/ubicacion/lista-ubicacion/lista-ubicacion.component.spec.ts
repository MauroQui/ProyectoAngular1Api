import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUbicacionComponent } from './lista-ubicacion.component';

describe('ListaUbicacionComponent', () => {
  let component: ListaUbicacionComponent;
  let fixture: ComponentFixture<ListaUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUbicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
