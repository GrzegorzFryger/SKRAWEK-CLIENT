import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from '../../layout/account/account.component';
import {AccountsComponent} from './accounts.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {ChildDetailsComponent} from './child-details/child-details.component';


const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [{
      path: 'child',
      component: ChildDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
