import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyProductComponent } from './recently-product.component';

describe('RecentlyProductComponent', () => {
  let component: RecentlyProductComponent;
  let fixture: ComponentFixture<RecentlyProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecentlyProductComponent]
    });
    fixture = TestBed.createComponent(RecentlyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
