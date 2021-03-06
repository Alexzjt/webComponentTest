import { BrowserModule } from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NZ_I18N, NzCalendarModule, zh_CN} from 'ng-zorro-antd';
import {createCustomElement} from '@angular/elements';
import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCalendarModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-root', elm);
  }
}
