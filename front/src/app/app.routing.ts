import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

export const routes:Routes=[
	{path:'profile',loadChildren:'app/profile/profile.module#ProfileModule'},
	{path:'board',loadChildren:'app/board/board.module#BoardModule'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRouting{}