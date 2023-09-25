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
        path: 'domestic-travel',
        loadComponent: () => import('./domestic-travel/domestic-travel.page'),
      },
      {
        path: 'foreign-travel',
        loadComponent: () => import('./foreign-travel/foreign-travel.page'),
      },
      {
        path: 'estimate',
        loadComponent: () => import('./estimate/estimate.page'),
      },
      {
        path: 'product-detail',
        loadComponent: () =>
          import('./product-detail/product-detail.component'),
      },
      {
        path: 'user-info',
        children: [
          {
            path: '',
            loadComponent: () => import('./user-info/user-info.page'),
          },
          {
            path: 'refund-detail',
            loadComponent: () => import('./refund-detail/refund-detail.page'),
          },
          {
            path: 'reservation',
            children: [
              {
                path: '',
                loadComponent: () => import('./reservation/reservation.page'),
              },
              {
                path: 'reservation-detail',
                loadComponent: () =>
                  import('./reservation-detail/reservation-detail.page'),
              },
            ],
          },
          {
            path: 'inquiry',
            loadComponent: () => import('./inquiry/inquiry.page'),
          },
          {
            path: 'review-trip',
            loadComponent: () => import('./review-trip/review-trip.page'),
          },
          {
            path: 'recently-product',
            loadComponent: () =>
              import('./recently-product/recently-product.page'),
          },
        ],
      },
    ],
  },
];
