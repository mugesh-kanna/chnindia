import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-data-center-manage',
  templateUrl: './data-center-manage.component.html',
  styleUrls: ['./data-center-manage.component.css']
})
export class DataCenterManageComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'DATA CENTER MANAGEMENT SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
