import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPillsComponent } from './tabs-pills.component';

describe('TabsPillsComponent', () => {
  let component: TabsPillsComponent;
  let fixture: ComponentFixture<TabsPillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabsPillsComponent]
    });
    fixture = TestBed.createComponent(TabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
