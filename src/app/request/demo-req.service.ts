import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import HttpRequestUtil from '../http/HttpRequestUtil';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoReqService {

  constructor(private httpService: HttpService) {
  }

  public getTestUrlResponse(): Observable<HttpResponse<any>> {
    let paramMap = new Map<string, string>();
    paramMap.set('lat', '41.726999');
    paramMap.set('lon', '123.490105');
    return this.httpService.getTestUrlResponse('wx/parkings/nearby?' + HttpRequestUtil.encodeParameters(paramMap));
  }

  public getRequest(): Observable<Object> {
    let paramMap = new Map<string, string>();
    paramMap.set('lat', '41.726999');
    paramMap.set('lon', '123.490105');
    return this.httpService.getTestUrl('wx/parkings/nearby?' + HttpRequestUtil.encodeParameters(paramMap));
  }

  public getParse422Request(): Observable<Object> {
    return this.httpService.getTestUrl('wx/parkings/nearby');
  }
}
