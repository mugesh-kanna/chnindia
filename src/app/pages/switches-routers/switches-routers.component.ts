import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-switches-routers',
  templateUrl: './switches-routers.component.html',
  styleUrls: ['./switches-routers.component.css']
})
export class SwitchesRoutersComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'SWITCHES & ROUTERS';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Cisco', code: '1'},
      {name: 'Netgear', code: '2'},
      {name: 'TP-LINK', code: '3'},
      {name: 'DLINK', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
