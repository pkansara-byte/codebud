import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
const routes: Routes = [
	{ 
		path: '',
		component: HomeComponent
	}
	,
	{
	    path: 'detail',
	    component: DetailComponent
	},{
	    path: 'login',
	    component: LoginComponent
	},{
	    path: 'ticket',
	    component: TicketComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
