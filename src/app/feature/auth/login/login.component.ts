import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AuthRequest } from '../shared/auth-request.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(new AuthRequest(form.value.username, form.value.password) )
      .subscribe(
        logged => {
          console.log(`${logged.userName} logged in successfuly.`);
          this.router.navigate(['/']);
        },
        error => console.log('There was an error logging the user.')
      );
  }

}
