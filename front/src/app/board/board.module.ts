import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BoardRouting } from './board.routing';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    BoardRouting
  ],
  declarations: [BoardComponent, DashboardComponent, WorkspaceComponent, ListComponent]
})
export class BoardModule { }
