import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../feature/auth/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout()
      .subscribe();
  }

}
