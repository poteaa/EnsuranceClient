import { Component, OnInit } from '@angular/core';
import { ClientService } from './shared/client.service';
import { Client } from './shared/client.model';
import { AuthService } from './../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  constructor(private clientService: ClientService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.clientService.getClientsBasicInfo()
      .subscribe(clients => this.clients = clients);
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  navigateToEdit(id: number) {
    this.router.navigate([`clients/${id}/policies/edit`]);
  }

}
