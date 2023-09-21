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
        loadComponent: () => import('./user-info/user-info.page'),
      },
    ],
  },
  {
    path: 'userInfo',
    component: LayoutPage,
    children: [
      {
        path: 'refundDetail',
        loadComponent: () => import('./refund-detail/refund-detail.page'),
      },
    ],
  },
];
