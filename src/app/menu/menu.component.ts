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

  constructor() {
  }

  ngOnInit(): void {
  }

}
