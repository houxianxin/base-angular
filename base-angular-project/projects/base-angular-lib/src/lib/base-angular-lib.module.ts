import {NgModule} from '@angular/core';
import {BaseAngularLibComponent} from './base-angular-lib.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [BaseAngularLibComponent],
  exports: [BaseAngularLibComponent]
})
export class BaseAngularLibModule {
}
