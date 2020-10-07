import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import { AccountComponent } from './layout/account/account.component';
import {MatRippleModule} from '@angular/material/core';


registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        MatButtonModule,
        MatRippleModule,
    ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pl'
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
