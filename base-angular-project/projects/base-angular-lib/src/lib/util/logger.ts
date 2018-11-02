import {isDevMode} from '@angular/core';
import {BaseService} from '../service/base-service';

export class Logger extends BaseService {

  log(tag: string, message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.log(`[ ${tag} ] ${message}`, optionalParams);
    }
  }

}
