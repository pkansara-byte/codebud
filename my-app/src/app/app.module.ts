import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { flightService } from '../services/flights.service';
import { UsersService } from '../services/users.service';
import { HttpClientModule  } from "@angular/common/http";
import { CommonService } from '../services/common.service';
import { TicketComponent } from './ticket/ticket.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    TicketComponent
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,flightService,UsersService,CommonService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
