import { Component, OnInit } from '@angular/core';
import { ClientService } from './shared/client.service';
import { Client } from './shared/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientsBasicInfo()
      .subscribe(clients => this.clients = clients);
  }

}
