import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxItemComponent } from './parallax-item.component';

describe('ParallaxItemComponent', () => {
  let component: ParallaxItemComponent;
  let fixture: ComponentFixture<ParallaxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
