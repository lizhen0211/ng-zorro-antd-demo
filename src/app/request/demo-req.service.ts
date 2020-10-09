import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import HttpRequestUtil from '../http/HttpRequestUtil';

@Injectable({
  providedIn: 'root'
})
export class DemoReqService {

  constructor(private httpService: HttpService) {
  }

  public getRequest() {
    let paramMap = new Map<string, string>();
    paramMap.set('lat', '41.726999');
    paramMap.set('lon', '123.490105');
    return this.httpService.getTestUrl('wx/parkings/nearby?' + HttpRequestUtil.encodeParameters(paramMap));
  }

  public getParse422Request() {
    return this.httpService.getTestUrl('wx/parkings/nearby');
  }
}
