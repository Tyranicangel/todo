import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent} from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
	imports:[
		RouterModule.forChild([
			{
				path:'',
				component:HomeComponent,
				children:[
					{ path:'',component:MainComponent },
					{ path:'login',component:LoginComponent },
					{ path:'signup',component:SignupComponent },
					{ path:'forgot',component:ForgotComponent },
					{ path:'**', redirectTo:'', pathMatch:'full' }
				]
			}
		])],
		exports:[RouterModule]
})

export class HomeRouting {}