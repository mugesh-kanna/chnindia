import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-data-secure-firewall',
  templateUrl: './data-secure-firewall.component.html',
  styleUrls: ['./data-secure-firewall.component.css']
})
export class DataSecureFirewallComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'DATA SECURITY & FIREWALL';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Email Security', code: '1'},
      {name: 'Network Security', code: '2'},
      {name: 'Untangle Firewall', code: '3'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
