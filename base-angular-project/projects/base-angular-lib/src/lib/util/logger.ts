import {isDevMode} from '@angular/core';
import {BaseService} from '../service/base-service';

export class Logger extends BaseService {

  v(tag: string, message: string) {
    if (isDevMode()) {
      console.log(`V [ ${tag} ] ${message}`);
    }
  }

  i(tag: string, message: string) {
    if (isDevMode()) {
      console.log(`I [ ${tag} ] ${message}`);
    }
  }

  d(tag: string, message: string) {
    if (isDevMode()) {
      console.log(`D [ ${tag} ] ${message}`);
    }
  }

  w(tag: string, message: string) {
    if (isDevMode()) {
      console.warn(`W [ ${tag} ] ${message}`);
    }
  }

  e(tag: string, message: string) {
    if (isDevMode()) {
      console.error(`E [ ${tag} ] ${message}`);
    }
  }

  printObj(tag: string, obj: any) {
    if (isDevMode()) {
      try {
        this.d(`${tag} printObj`, JSON.stringify(obj, null, 2));
      } catch (err: any) {
        this.e(`${tag} printObj`, err.toString());
      }
    }
  }
}
