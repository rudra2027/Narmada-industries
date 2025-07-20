import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      })
    )
  ]
};
