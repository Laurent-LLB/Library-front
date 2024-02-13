import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BASE_API_URL } from './constants/injection';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: BASE_API_URL,
      useValue: environment.BASE_API_URL,
    },
  ],
};
