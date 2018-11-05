import {InjectionToken, NgModule} from '@angular/core';
import {BaseAngularLibComponent} from './base-angular-lib.component';
import {HttpClientModule} from '@angular/common/http';
import {Logger} from './util/logger';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    BaseAngularLibComponent
  ],
  exports: [
    BaseAngularLibComponent,
    HttpClientModule
  ],
  providers: [
    Logger
  ]
})
export class BaseAngularLibModule {
}

export const BASE_ANGULAR_LIB_MODULE_CONFIG_TOKEN = new InjectionToken<BaseAngularLibModuleConfig>('BaseAngularLibModuleConfigToken');

export abstract class BaseAngularLibModuleConfig {
}
