import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCapitulosComponent } from './lista-capitulos.component';

describe('ListaCapitulosComponent', () => {
  let component: ListaCapitulosComponent;
  let fixture: ComponentFixture<ListaCapitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCapitulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
