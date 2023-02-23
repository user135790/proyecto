import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrardatosComponent } from './mostrardatos.component';

describe('MostrardatosComponent', () => {
  let component: MostrardatosComponent;
  let fixture: ComponentFixture<MostrardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrardatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
