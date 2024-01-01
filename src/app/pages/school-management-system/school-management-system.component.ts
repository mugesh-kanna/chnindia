import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-school-management-system',
  templateUrl: './school-management-system.component.html',
  styleUrls: ['./school-management-system.component.css']
})
export class SchoolManagementSystemComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'SCHOOL MANAGEMENT SYSTEM';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
