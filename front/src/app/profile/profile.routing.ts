import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent} from './profile.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';

@NgModule({
	imports:[
		RouterModule.forChild([
			{ 
				path:'',
				component:ProfileComponent,
				children:[
					{ path:'',component:MainComponent},
					{ path:'account',component:AccountComponent },
					{ path:'settings',component:SettingsComponent },
					{ path:'**', redirectTo:'', pathMatch:'full' }
				] 
			},
		])],
		exports:[RouterModule]
})

export class ProfileRouting {}