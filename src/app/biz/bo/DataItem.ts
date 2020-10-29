export class DataItem {
  private _rssi: string;
  private _vbat: string;
  private _created_time: string;
  private _reg_code: string;

  get rssi(): string {
    return this._rssi;
  }

  set rssi(value: string) {
    this._rssi = value;
  }

  get vbat(): string {
    return this._vbat;
  }

  set vbat(value: string) {
    this._vbat = value;
  }

  get created_time(): string {
    return this._created_time;
  }

  set created_time(value: string) {
    this._created_time = value;
  }

  get reg_code(): string {
    return this._reg_code;
  }

  set reg_code(value: string) {
    this._reg_code = value;
  }
}
