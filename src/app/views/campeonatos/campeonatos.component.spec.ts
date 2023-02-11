import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatosComponent } from './campeonatos.component';

describe('CampeonatosComponent', () => {
  let component: CampeonatosComponent;
  let fixture: ComponentFixture<CampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
