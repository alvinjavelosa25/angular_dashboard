import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesOverviewComponent } from './daily-sales-overview.component';

describe('DailySalesOverviewComponent', () => {
  let component: DailySalesOverviewComponent;
  let fixture: ComponentFixture<DailySalesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailySalesOverviewComponent]
    });
    fixture = TestBed.createComponent(DailySalesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
