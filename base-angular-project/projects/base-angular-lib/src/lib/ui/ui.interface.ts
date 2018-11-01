import {BaseModel} from '../model/base-model';
import {BaseError} from '../model/base-error';

export enum ViewContentType {
  empty, loading, error, main
}

export interface Popup {
  show(): boolean;

  dismiss(): boolean;

  isShowing(): boolean;
}

export interface UI {
  showLoading(isShow: boolean, msg?: string): boolean;

  showMessage(isShow: boolean, msgObj: BaseModel): boolean;

  showError(isShow: boolean, error: BaseError): boolean;

  showPopup(isShow: boolean, popup: Popup): boolean;

  showViewContent(type: ViewContentType): boolean;

  showPagePre(): boolean;

  showPageNext(): boolean;
}
