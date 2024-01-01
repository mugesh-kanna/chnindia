import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-application-develop',
  templateUrl: './application-develop.component.html',
  styleUrls: ['./application-develop.component.css']
})
export class ApplicationDevelopComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'APPLICATION DEVELOPMENT SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
