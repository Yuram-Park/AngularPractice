import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartList4Component } from './chart-list4.component';

describe('ChartList4Component', () => {
  let component: ChartList4Component;
  let fixture: ComponentFixture<ChartList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartList4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
