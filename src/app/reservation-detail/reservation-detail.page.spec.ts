import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDetailPage } from './reservation-detail.page';

describe('ReservationDetailPage', () => {
  let component: ReservationDetailPage;
  let fixture: ComponentFixture<ReservationDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReservationDetailPage]
    });
    fixture = TestBed.createComponent(ReservationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
