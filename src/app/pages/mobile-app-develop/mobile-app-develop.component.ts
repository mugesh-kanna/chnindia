import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-mobile-app-develop',
  templateUrl: './mobile-app-develop.component.html',
  styleUrls: ['./mobile-app-develop.component.css']
})
export class MobileAppDevelopComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'MOBILE APPLICATION DEVELOPMENT SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
