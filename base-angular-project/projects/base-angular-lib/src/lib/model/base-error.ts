import {BaseModel} from './base-model';
import {HttpErrorResponse} from '@angular/common/http';

export class BaseError extends BaseModel {
  static CODE_RX_ERROR = 0x0001;
  static CODE_NETWORK_ERROR_CLIENT = 0x0002;
  static CODE_NETWORK_ERROR_RESPONSE = 0x0003;
  static CODE_NETWORK_ERROR_TIMEOUT = 0x0004;
  static CODE_NETWORK_ERROR = 0x0005;

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
    return BaseError.newInstance(BaseError.CODE_NETWORK_ERROR, '网络异常', err);
  }

  static fromNetworkError_ResponseCode(err: HttpErrorResponse): BaseError {
    return BaseError.newInstance(BaseError.CODE_NETWORK_ERROR, '网络异常', err);
  }

  static fromNetworkError_Timeout(err: any): BaseError {
    return BaseError.newInstance(BaseError.CODE_NETWORK_ERROR, '网络超时', err);
  }

  static fromRxError(err: any): BaseError {
    return BaseError.newInstance(BaseError.CODE_RX_ERROR, 'RX异常', err);
  }
}
