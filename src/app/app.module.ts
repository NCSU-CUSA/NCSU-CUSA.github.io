import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { MerchComponent } from './merch/merch.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LnyComponent } from './lny/lny.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    MembershipComponent,
    ContactComponent,
    SponsorComponent,
    MerchComponent,
    LnyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
