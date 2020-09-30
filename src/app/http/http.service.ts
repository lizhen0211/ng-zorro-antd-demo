import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  options: {};
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  public getTestUrl(path: string): Observable<Object> {
    return this.httpClient.get(environment.TEST_URL + '/'+path);
  }
}
