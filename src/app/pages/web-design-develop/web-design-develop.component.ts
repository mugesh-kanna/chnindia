import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-web-design-develop',
  templateUrl: './web-design-develop.component.html',
  styleUrls: ['./web-design-develop.component.css']
})
export class WebDesignDevelopComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'WEB DESIGN & DEVELOPMENT SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
