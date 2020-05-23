import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserEditComponent } from './user/user-edit/user-edit.component';


@NgModule({
  declarations: [UserComponent, UserEditComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [UserComponent]
})
export class SharedModule {
}
