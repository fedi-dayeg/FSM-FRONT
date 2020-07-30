import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePublicModule} from './home-public/home-public.module';
import {HttpClientModule} from '@angular/common/http';
import {SuiModule} from 'ng2-semantic-ui';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomePublicModule,
        HttpClientModule,
      SuiModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
