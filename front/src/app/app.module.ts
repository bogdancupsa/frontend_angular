
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { CardComponent } from './card/card.component';
import {ClientOperationsComponent} from "./client-operations/client-operations.component";
// Import other components and services as needed

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminOperationsComponent,
    CardComponent,
    ClientOperationsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule,
    // Include other modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
