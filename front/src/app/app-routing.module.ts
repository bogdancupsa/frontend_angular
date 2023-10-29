import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AdminOperationsComponent} from "./admin-operations/admin-operations.component";
import {ClientOperationsComponent} from "./client-operations/client-operations.component"; // Import your LoginComponent

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'login', component: LoginComponent },
  {path: 'admin-operations', component: AdminOperationsComponent},
  {path: 'client-operations', component: ClientOperationsComponent}
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
