import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteViewsOverviewComponent } from './website-views-overview.component';

describe('WebsiteViewsOverviewComponent', () => {
  let component: WebsiteViewsOverviewComponent;
  let fixture: ComponentFixture<WebsiteViewsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteViewsOverviewComponent]
    });
    fixture = TestBed.createComponent(WebsiteViewsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
