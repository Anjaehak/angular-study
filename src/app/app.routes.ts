import { Route } from '@angular/router';
import { LayoutPage } from './layout/layout.page';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/index/index.page'),
      },
      {
        path: 'search',
        loadComponent: () => import('./layout/header/search/search.page'),
      },
      {
        path: 'domestic-travel',
        loadComponent: () =>
          import('./pages/domestic-travel/domestic-travel.page'),
      },
      {
        path: 'foreign-travel',
        loadComponent: () =>
          import('./pages/foreign-travel/foreign-travel.page'),
      },
      {
        path: 'estimate',
        loadComponent: () => import('./pages/estimate/estimate.page'),
      },
      {
        path: 'product-detail',
        loadComponent: () =>
          import('./pages/product-detail/product-detail.component'),
      },
      {
        path: 'user-info',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/user-info/user-info.page'),
          },
          {
            path: 'refund-detail',
            loadComponent: () =>
              import('./pages/user-info/refund-detail/refund-detail.page'),
          },
          {
            path: 'bookmark',
            loadComponent: () =>
              import('./pages/user-info/bookmarks/bookmarks.page'),
          },
          {
            path: 'reservation',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./pages/user-info/reservation/reservation.page'),
              },
              {
                path: 'reservation-detail',
                loadComponent: () =>
                  import(
                    './pages/user-info/reservation/reservation-detail/reservation-detail.page'
                  ),
              },
            ],
          },
          {
            path: 'reservation-detail',
            loadComponent: () =>
              import(
                './pages/user-info/reservation/reservation-detail/reservation-detail.page'
              ),
          },
          {
            path: 'inquiry',
            loadComponent: () =>
              import('./pages/user-info/inquiry/inquiry.page'),
          },
          {
            path: 'review-trip',
            loadComponent: () =>
              import('./pages/user-info/review-trip/review-trip.page'),
          },
          {
            path: 'recently-product',
            loadComponent: () =>
              import(
                './pages/user-info/recently-product/recently-product.page'
              ),
          },
          {
            path: 'user-withdrawal',
            loadComponent: () =>
              import('./pages/user-info/user-withdrawal/user-withdrawal.page'),
          },
        ],
      },
    ],
  },
];
