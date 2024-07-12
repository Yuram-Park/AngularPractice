import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartList3Component } from './chart-list3.component';

describe('ChartList3Component', () => {
  let component: ChartList3Component;
  let fixture: ComponentFixture<ChartList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartList3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
