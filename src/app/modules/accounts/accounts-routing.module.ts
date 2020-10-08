import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from './accounts.component';
import {ChildDetailsComponent} from './child-details/child-details.component';
import {CreateAccountComponent} from './create-account/create-account.component';


const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {
        path: 'child',
        component: ChildDetailsComponent
      },
      {
        path: 'create',
        component: CreateAccountComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {
}
