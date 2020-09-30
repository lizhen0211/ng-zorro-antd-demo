import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DemoReqService {

  constructor(private httpService: HttpService) {
  }

  public getRequest() {
    return this.httpService.getTestUrl('wx/parkings/nearby');
  }
}
