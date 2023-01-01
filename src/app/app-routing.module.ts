import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { MerchComponent } from './merch/merch.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LnyComponent } from './lny/lny.component';

const routes: Routes = [
  {path: 'home', title:'CUSA Home', component: HomeComponent},
  {path: 'about', title:'About', component: AboutComponent},
  {path: 'events', title:'Events', component: EventsComponent},
  {path: 'membership', title:'Membership', component: MembershipComponent},
  {path: 'contact', title:'Contact', component: ContactComponent},
  {path: 'sponsor', title:'For Sponsors', component: SponsorComponent},
  {path: 'merch', title:'Merch', component: MerchComponent},
  {path: 'lny', title: "LNY", component: LnyComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
