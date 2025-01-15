import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonExampleComponent } from './json-example.component';

describe('JsonExampleComponent', () => {
  let component: JsonExampleComponent;
  let fixture: ComponentFixture<JsonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
