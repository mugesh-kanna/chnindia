import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-retail-management-system',
  templateUrl: './retail-management-system.component.html',
  styleUrls: ['./retail-management-system.component.css']
})
export class RetailManagementSystemComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'RETAIL MANAGEMENT SYSTEM';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
