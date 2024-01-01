import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-it-support-resource',
  templateUrl: './it-support-resource.component.html',
  styleUrls: ['./it-support-resource.component.css']
})
export class ItSupportResourceComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'IT SUPPORT RESOURCES SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
