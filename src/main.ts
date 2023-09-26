import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { DialogModule } from '@angular/cdk/dialog';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, DialogModule),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
