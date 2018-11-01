import {BaseModel} from './base-model';
import {HttpErrorResponse} from '@angular/common/http';

export class BaseError extends BaseModel {
  static CODE_ERROR_RX = 0x0001;
  static CODE_ERROR_NETWORK = 0x0002;

  code: number;
  message: string;
  extra?: any;

  constructor(code: number, description: string, extra?: any) {
    super(description);
    this.code = code;
    this.message = description;
    this.extra = extra;
  }

  static newInstance(code: number, description: string, extra?: any): BaseError {
    return new BaseError(code, description, extra);
  }

  static fromNetworkError_ClientSide(err: HttpErrorResponse): BaseError {
    return BaseError.newInstance(BaseError.CODE_ERROR_NETWORK, '网络异常', err);
  }

  static fromNetworkError_ResponseCode(err: HttpErrorResponse): BaseError {
    return BaseError.newInstance(BaseError.CODE_ERROR_NETWORK, '网络异常', err);
  }

  static fromNetworkError_Timeout(err: any): BaseError {
    return BaseError.newInstance(BaseError.CODE_ERROR_NETWORK, '网络超时', err);
  }

  static fromRxError(err: any): BaseError {
    return BaseError.newInstance(BaseError.CODE_ERROR_RX, 'RX代码异常', err);
  }
}
