import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import HttpRequestUtil from './HttpRequestUtil';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  options: {};
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  public getTestUrlResponse(path: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(environment.TEST_URL + '/' + path, HttpRequestUtil.getJsonOptions());
  }

  public getTestUrl(path: string): Observable<Object> {
    return this.httpClient.get(environment.TEST_URL + '/'+path);
  }
}
