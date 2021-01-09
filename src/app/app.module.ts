import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrestoComponent } from './addresto/addresto.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';
import { ListrestoComponent } from './listresto/listresto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchrestoComponent } from './searchresto/searchresto.component';
import { DeleterestoComponent } from './deleteresto/deleteresto.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrestoComponent,
    UpdaterestoComponent,
    ListrestoComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    SearchrestoComponent,
    DeleterestoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
