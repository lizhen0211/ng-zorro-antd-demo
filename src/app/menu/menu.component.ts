import {Component, OnInit} from '@angular/core';
import {DemoReqService} from '../request/demo-req.service';
import HttpResErrorPaser, {EntityErrorPaser} from '../http/error/HttpResErrorPaser';
import HttpError from '../http/error/HttpError';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(private demoReqService: DemoReqService) {
  }

  ngOnInit(): void {
  }

  public onNetworkClick(): void {
    this.demoReqService.getRequest().subscribe((res) => {

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
