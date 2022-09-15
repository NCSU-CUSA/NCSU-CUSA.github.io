import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'events', component: EventsComponent},
  {path: 'membership', component: MembershipComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
