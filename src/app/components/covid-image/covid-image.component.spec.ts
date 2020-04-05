import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidImageComponent } from './covid-image.component';

describe('CovidImageComponent', () => {
  let component: CovidImageComponent;
  let fixture: ComponentFixture<CovidImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
