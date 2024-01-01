import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-managed-wifi',
  templateUrl: './managed-wifi.component.html',
  styleUrls: ['./managed-wifi.component.css']
})
export class ManagedWifiComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'WIRELESS MANAGEMENT SYSTEM';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Ruckus Wireless Software', code: '1'},
      {name: 'Ruckus Wireless Controllers', code: '2'},
      {name: '24 Online Billing System', code: '3'},
      {name: 'D-LINK Unified Wireless Controllers', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
