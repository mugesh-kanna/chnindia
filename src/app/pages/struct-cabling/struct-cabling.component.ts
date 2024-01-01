import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-struct-cabling',
  templateUrl: './struct-cabling.component.html',
  styleUrls: ['./struct-cabling.component.css']
})
export class StructCablingComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'STRUCTURED CABLING SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
