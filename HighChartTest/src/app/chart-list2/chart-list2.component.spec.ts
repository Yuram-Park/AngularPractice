import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartList2Component } from './chart-list2.component';

describe('ChartList2Component', () => {
  let component: ChartList2Component;
  let fixture: ComponentFixture<ChartList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartList2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
