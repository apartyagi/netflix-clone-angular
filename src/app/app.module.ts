import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { BannerComponent } from './banner/banner.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RowComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
