import {NgModule} from '@angular/core';
import {BaseAngularLibComponent} from './base-angular-lib.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule,
    FlexLayoutModule
  ],
  declarations: [BaseAngularLibComponent],
  exports: [BaseAngularLibComponent, TranslateModule, FlexLayoutModule]
})
export class BaseAngularLibModule {
}
