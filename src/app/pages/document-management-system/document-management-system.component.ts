import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-document-management-system',
  templateUrl: './document-management-system.component.html',
  styleUrls: ['./document-management-system.component.css']
})
export class DocumentManagementSystemComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'DOCUMENT MANAGEMENT SYSTEM';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
