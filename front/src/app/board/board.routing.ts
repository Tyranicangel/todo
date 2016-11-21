import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
	imports:[
		RouterModule.forChild([
			{
				path:'',
				component:BoardComponent,
				children:[
					{ path:'',component:DashboardComponent },
					{ path:'workspace',component:WorkspaceComponent },
					{ path:'', redirectTo:'', pathMatch:'full' }
				]
			}
		])],
		exports:[RouterModule]
})

export class BoardRouting {}