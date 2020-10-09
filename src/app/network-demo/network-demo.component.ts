import {Component, OnInit} from '@angular/core';
import {DemoReqService} from '../request/demo-req.service';
import HttpResErrorPaser, {EntityErrorPaser} from '../http/error/HttpResErrorPaser';
import HttpError from '../http/error/HttpError';
import {Park} from '../biz/bo/Park';
import HttpResponseUtil from '../http/HttpResponseUtil';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-network-demo',
  templateUrl: './network-demo.component.html',
  styleUrls: ['./network-demo.component.less']
})
export class NetworkDemoComponent implements OnInit {

  constructor(private demoReqService: DemoReqService) {
  }

  ngOnInit(): void {
  }

  public onGetRequestClick(): void {
    this.demoReqService.getTestUrlResponse().subscribe((res: HttpResponse<any>) => {
      console.log(res);
      console.log(res.headers.get('date'));
      console.log(HttpResponseUtil.getHeaderDate(res));
      console.log(HttpResponseUtil.getHeaderLink(res));

      // @ts-ignore
      let parks1: Array<Park> = res.body;
      console.log(parks1);
      console.log(parks1[0].address);
      console.log(parks1[0].rt);
      console.log(parks1[0].total);

      // @ts-ignore
      let parks: Array<Park> = HttpResponseUtil.parseJSONArray(Park, res);
      console.log(parks);
    }, ((error) => {
      console.log(error);
    }));
  }

  public onPostRequestClick(): void {

  }

  public onParse422Click(): void {
    this.demoReqService.getParse422Request().subscribe((res) => {
      console.log(res);
    }, (err) => {
      let resError = HttpResErrorPaser.parseResError(err.status, err.error.errors, new class implements EntityErrorPaser {
        parseUnprocessableEntity(error: HttpError): string {
          if (error != null) {
            if ('lon' == error.field && 'missing_field' == error.code) {
              return '经度错误';
            } else if ('lat' == error.field && 'missing_field' == error.code) {
              return '纬度错误';
            }
          }
          return '';
        }
      });
      console.log(err);
      console.log(resError);
    });
  }

}
