import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  title = 'angular-login-demo';

  ngOnInit(): void {
    if(!this.authService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    } 
  }
}
