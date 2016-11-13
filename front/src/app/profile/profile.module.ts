import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRouting
  ],
  declarations: [ProfileComponent, SettingsComponent, AccountComponent, MainComponent]
})
export class ProfileModule { }
