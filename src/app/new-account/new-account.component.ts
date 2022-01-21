import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // signale à Angular de fournir ce service par DI, force la DI à créer une nouvelle instance du service
})
export class NewAccountComponent {

  // injection de dépendance
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
    ) {  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
