import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { provideDateFnsAdapter } from '@angular/material-date-fns-adapter';
import { ptBR } from 'date-fns/locale';
import {CUSTOM_DATE_FORMATS} from './shared/utils/custom-date-format';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';

registerLocaleData(ptBr);


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideDateFnsAdapter(),

    { provide: MAT_DATE_LOCALE, useValue: ptBR },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
