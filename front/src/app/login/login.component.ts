import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Adjust the path based on your folder structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { 
    console.log('LoginComponent loaded!');
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        // Store token or user info as needed
        if (response.role === 'admin') {
          this.router.navigate(['/admin-operations']);
        } else {
          this.router.navigate(['/client-operations']);
        }
      },
      error => {
        console.error('Login failed', error);
        // Handle login error, show a message, etc.
      }
    );
  }
}
