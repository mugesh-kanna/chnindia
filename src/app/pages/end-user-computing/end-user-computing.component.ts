import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-end-user-computing',
  templateUrl: './end-user-computing.component.html',
  styleUrls: ['./end-user-computing.component.css']
})
export class EndUserComputingComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'END USER COMPUTING SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
