import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveComponent } from './nave.component';

describe('NaveComponent', () => {
  let component: NaveComponent;
  let fixture: ComponentFixture<NaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaveComponent]
    });
    fixture = TestBed.createComponent(NaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
