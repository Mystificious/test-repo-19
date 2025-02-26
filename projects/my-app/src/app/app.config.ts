import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {MyLibService} from 'my-lib';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(), MyLibService]
};
