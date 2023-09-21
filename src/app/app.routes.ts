import { Route } from '@angular/router';
import { LayoutPage } from './layout/layout.page';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        loadComponent: () => import('./index/index.page'),
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search.page'),
      },
      {
        path: 'domesticTravel',
        loadComponent: () => import('./domestic-travel/domestic-travel.page'),
      },
      {
        path: 'foreignTravel',
        loadComponent: () => import('./foreign-travel/foreign-travel.page'),
      },
      {
        path: 'estimate',
        loadComponent: () => import('./estimate/estimate.page'),
      },
      {
        path: 'userInfo',
        children: [
          {
            path: '',
            loadComponent: () => import('./user-info/user-info.page'),
          },
          {
            path: 'refundDetail',
            loadComponent: () => import('./refund-detail/refund-detail.page'),
          },
          {
            path: 'reservation',
            loadComponent: () => import('./reservation/reservation.page'),
          },
          {
            path: 'inquiry',
            loadComponent: () => import('./inquiry/inquiry.page'),
          },
          {
            path: 'reviewTrip',
            loadComponent: () => import('./review-trip/review-trip.page'),
          },
        ],
      },
    ],
  },
];
