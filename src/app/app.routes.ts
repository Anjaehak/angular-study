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
        path: 'myCountryTravel',
        loadComponent: () =>
          import('./my-country-travel/my-country-travel.page'),
      },
    ],
  },
];
