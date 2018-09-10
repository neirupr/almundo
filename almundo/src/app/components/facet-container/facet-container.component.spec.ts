import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetContainerComponent } from './facet-container.component';

describe('FacetContainerComponent', () => {
  let component: FacetContainerComponent;
  let fixture: ComponentFixture<FacetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
