import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AuthService } from './auth.service';
import { EditItemComponent } from './edit-item/edit-item.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: '', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'list-items', component : ItemListComponent, canActivate : [AuthService]},
  { path: 'add-item/:titleText', component : AddItemComponent, canActivate : [AuthService]},
  { path: 'edit-item/:id', component : EditItemComponent, canActivate : [AuthService]}


] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
