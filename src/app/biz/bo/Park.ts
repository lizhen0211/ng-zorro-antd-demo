export class Park {
  private _park_type: any[];
  private _district: string;
  private _lon: string;
  private _lat: string;
  private _online_payment?: any;
  private _is_deleted: boolean;
  private _sort_num: number;
  private _parking_id: string;
  private _is_free: number;
  private _city: string;
  private _short_name: string;
  private _address: string;
  private _area_type: number;
  private _opening_type: number;
  private _region_id: string;
  private _rt: Rt;
  private _province: string;
  private _distance: number;
  private _pay_type: string[];
  private _is_reserved: boolean;
  private _telephone: string[];
  private _park_id: string;
  private _total: number;
  private _buy_online: boolean;
  private _pay_time: number;
  private _parking_category: number;
  private _parking_name: string;
  private _buy_type: number[];

  get park_type(): any[] {
    return this._park_type;
  }

  set park_type(value: any[]) {
    this._park_type = value;
  }

  get district(): string {
    return this._district;
  }

  set district(value: string) {
    this._district = value;
  }

  get lon(): string {
    return this._lon;
  }

  set lon(value: string) {
    this._lon = value;
  }

  get lat(): string {
    return this._lat;
  }

  set lat(value: string) {
    this._lat = value;
  }

  get online_payment(): any {
    return this._online_payment;
  }

  set online_payment(value: any) {
    this._online_payment = value;
  }

  get is_deleted(): boolean {
    return this._is_deleted;
  }

  set is_deleted(value: boolean) {
    this._is_deleted = value;
  }

  get sort_num(): number {
    return this._sort_num;
  }

  set sort_num(value: number) {
    this._sort_num = value;
  }

  get parking_id(): string {
    return this._parking_id;
  }

  set parking_id(value: string) {
    this._parking_id = value;
  }

  get is_free(): number {
    return this._is_free;
  }

  set is_free(value: number) {
    this._is_free = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get short_name(): string {
    return this._short_name;
  }

  set short_name(value: string) {
    this._short_name = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get area_type(): number {
    return this._area_type;
  }

  set area_type(value: number) {
    this._area_type = value;
  }

  get opening_type(): number {
    return this._opening_type;
  }

  set opening_type(value: number) {
    this._opening_type = value;
  }

  get region_id(): string {
    return this._region_id;
  }

  set region_id(value: string) {
    this._region_id = value;
  }

  get rt(): Rt {
    return this._rt;
  }

  set rt(value: Rt) {
    this._rt = value;
  }

  get province(): string {
    return this._province;
  }

  set province(value: string) {
    this._province = value;
  }

  get distance(): number {
    return this._distance;
  }

  set distance(value: number) {
    this._distance = value;
  }

  get pay_type(): string[] {
    return this._pay_type;
  }

  set pay_type(value: string[]) {
    this._pay_type = value;
  }

  get is_reserved(): boolean {
    return this._is_reserved;
  }

  set is_reserved(value: boolean) {
    this._is_reserved = value;
  }

  get telephone(): string[] {
    return this._telephone;
  }

  set telephone(value: string[]) {
    this._telephone = value;
  }

  get park_id(): string {
    return this._park_id;
  }

  set park_id(value: string) {
    this._park_id = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get buy_online(): boolean {
    return this._buy_online;
  }

  set buy_online(value: boolean) {
    this._buy_online = value;
  }

  get pay_time(): number {
    return this._pay_time;
  }

  set pay_time(value: number) {
    this._pay_time = value;
  }

  get parking_category(): number {
    return this._parking_category;
  }

  set parking_category(value: number) {
    this._parking_category = value;
  }

  get parking_name(): string {
    return this._parking_name;
  }

  set parking_name(value: string) {
    this._parking_name = value;
  }

  get buy_type(): number[] {
    return this._buy_type;
  }

  set buy_type(value: number[]) {
    this._buy_type = value;
  }
}

export interface Rt {
  is_reserved: boolean;
  min_price?: any;
  parking_reservation_product_status: number;
  status: string;
  avail: number;
  total: number;
}
