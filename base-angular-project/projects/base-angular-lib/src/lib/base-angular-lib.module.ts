import {NgModule} from '@angular/core';
import {BaseAngularLibComponent} from './base-angular-lib.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Logger} from './util/logger';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule,
    FlexLayoutModule
  ],
  declarations: [
    BaseAngularLibComponent
  ],
  exports: [
    BaseAngularLibComponent,
    HttpClientModule,
    TranslateModule,
    FlexLayoutModule
  ],
  providers: [
    Logger
  ]
})
export class BaseAngularLibModule {
}
