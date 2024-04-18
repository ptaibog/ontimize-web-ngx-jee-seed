import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AccountNumberRenderComponent } from './accounts-home/account-number-render/account-number-render.component';


@NgModule({
  declarations: [
    AccountsHomeComponent,
    AccountNumberRenderComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
