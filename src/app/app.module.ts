import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitlePipe } from './title.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DonePipe } from './done.pipe';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddItemComponent,
    EditItemComponent,
    TitlePipe,
    LoginComponent,
    HomeComponent,
    DonePipe
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
