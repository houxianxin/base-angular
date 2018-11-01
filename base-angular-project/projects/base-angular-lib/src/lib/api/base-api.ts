import {BaseService} from '../service/base-service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry, timeout} from 'rxjs/operators';
import {BaseError} from '../model/base-error';

export abstract class BaseApi extends BaseService {

  static TIMEOUT_DEFAULT = 1000 * 5;
  static RETRY_DEFAULT = 0;


  private timeoutLen: number;
  private retryCount: number;

  constructor(public httpClient: HttpClient) {
    super();
    this.reset();
  }

  public setTimeout(timeoutLen: number) {
    this.timeoutLen = timeoutLen;
    return this;
  }

  public setRetryCount(retryCount: number) {
    this.retryCount = retryCount;
    return this;
  }

  private reset() {
    this.timeoutLen = BaseApi.TIMEOUT_DEFAULT;
    this.retryCount = BaseApi.RETRY_DEFAULT;
  }

  protected abstract parseResponseValue<T>(value: T): BaseError | null;

  private pipe$<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(timeout(this.timeoutLen), retry(this.retryCount), map((value: T) => {
      const e = this.parseResponseValue<T>(value);
      if (e) {
        throw e;
      } else {
        return value;
      }
    }), catchError((err: any) => {
      let baseerror: BaseError;
      if (err instanceof HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          // console.error('An error occurred:', error.error.message);
          baseerror = BaseError.fromNetworkError_ClientSide(err);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          // console.error(
          //   `Backend returned code ${error.status}, ` +
          //   `body was: ${error.error}`);
          baseerror = BaseError.fromNetworkError_ResponseCode(err);
        }
      } else if (err && err.name && err.name.toLowerCase() === 'timeouterror') {
        baseerror = BaseError.fromNetworkError_Timeout(err);
      } else if (err instanceof BaseError) {
        baseerror = <BaseError>err;
      } else {
        baseerror = BaseError.fromRxError(err);
      }
      return throwError(baseerror);
    }));
  }

  protected post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    const observable = this.pipe$<T>(this.httpClient.post<T>(url, body, options));
    this.reset();
    return observable;
  }

  protected get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    const observable = this.pipe$<T>(this.httpClient.get<T>(url, options));
    this.reset();
    return observable;
  }
}
