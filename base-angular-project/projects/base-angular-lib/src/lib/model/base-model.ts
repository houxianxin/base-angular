import * as uuid from 'uuid';

export abstract class BaseModel {
  private __uuid: string;
  private __description: string;
  private __extra?: any;

  constructor(description: string, extra?: any) {
    this.__uuid = uuid.v1();
    this.__description = description;
    this.__extra = extra;
  }

  get _uuid(): string {
    return this.__uuid;
  }

  get _description(): string {
    return this.__description;
  }

  get _extra(): any {
    return this.__extra;
  }
}
