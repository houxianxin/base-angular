import {OnDestroy, OnInit} from '@angular/core';
import {BaseModel} from '../model/base-model';
import {BaseError} from '../model/base-error';
import {Observable, Subscriber} from 'rxjs';
import {BaseService} from '../service/base-service';
import {Popup, UI, ViewContentType} from './ui.interface';


export abstract class BaseComponent<T extends BaseService> implements OnInit, OnDestroy, UI {

  constructor(public app: T) {
  }

  abstract ngOnInit(): void;

  abstract ngOnDestroy(): void;

  abstract showLoading(isShow: boolean, msg?: string): boolean;

  abstract showMessage(isShow: boolean, msgObj: BaseModel): boolean;

  abstract showError(isShow: boolean, error: BaseError): boolean;

  abstract showPopup(isShow: boolean, popup: Popup): boolean;

  abstract showViewContent(type: ViewContentType): boolean;

  abstract showPageNext(): boolean;

  abstract showPagePre(): boolean;

  protected handle$<R>(task: Observable<R>, isNeedShowLoading: boolean, taskName: string = ''): Observable<R> {
    return Observable.create((subscriber: Subscriber<R>) => {
      if (isNeedShowLoading) {
        this.showLoading(true, taskName);
      }
      const subscription = task.subscribe((value: R) => {
        subscriber.next(value);
      }, (err: BaseError) => {
        if (isNeedShowLoading) {
          this.showLoading(false, '');
        }
        this.showError(true, err);
        subscriber.error(err);
        if (subscription) {
          subscription.unsubscribe();
        }
      }, () => {
        if (isNeedShowLoading) {
          this.showLoading(false, '');
        }
        subscriber.complete();
        if (subscription) {
          subscription.unsubscribe();
        }
      });
    });
  }

}
