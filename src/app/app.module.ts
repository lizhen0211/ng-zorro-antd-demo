import {BrowserModule} from '@angular/platform-browser';
import {APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, NgModule, PLATFORM_INITIALIZER} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import initializer from './initialize/initializer';
import {MenuComponent} from './menu/menu.component';
import {NetworkDemoComponent} from './network-demo/network-demo.component';
import {SlideComponent} from './slide/slide.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NetworkDemoComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: APP_BOOTSTRAP_LISTENER, useFactory: initializer.appBootstrapped, multi: true},
    {provide: PLATFORM_INITIALIZER, useFactory: initializer.platformInitialized, multi: true},
    {provide: APP_INITIALIZER, useFactory: initializer.delayBootstrapping, multi: true},
  ],
  bootstrap: [SlideComponent]
})
export class AppModule {
}
