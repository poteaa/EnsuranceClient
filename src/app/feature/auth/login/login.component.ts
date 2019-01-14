import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AuthRequest } from '../shared/auth-request.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(new AuthRequest(form.value.username, form.value.password) )
      .subscribe(
        logged => console.log(`${logged.userName} logged in successfuly.`),
        error => console.log('There was an error logging the user.')
      );
  }

}
