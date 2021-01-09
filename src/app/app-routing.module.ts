import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import all components here to make routes
import {AddrestoComponent} from './addresto/addresto.component';
import {ListrestoComponent} from './listresto/listresto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdaterestoComponent} from './updateresto/updateresto.component';
import {SearchrestoComponent} from './searchresto/searchresto.component';
import {DeleterestoComponent} from './deleteresto/deleteresto.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {AppComponent} from './app.component';

const routes: Routes = [
{path: 'AddResto', component: AddrestoComponent},
{path: 'ListResto', component: ListrestoComponent},
{path: 'Login', component: LoginComponent},
{path: 'Register', component: RegisterComponent},
{path: 'UpdateResto', component: UpdaterestoComponent},
{path: 'SearchResto', component: SearchrestoComponent},
{path: 'DeleteResto', component: DeleterestoComponent},
{path: 'Home', component: AppComponent},
{path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
