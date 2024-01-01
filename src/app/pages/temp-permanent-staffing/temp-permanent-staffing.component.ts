import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-temp-permanent-staffing',
  templateUrl: './temp-permanent-staffing.component.html',
  styleUrls: ['./temp-permanent-staffing.component.css']
})
export class TempPermanentStaffingComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'TEMPORARY & PERMANENT STAFFING SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
