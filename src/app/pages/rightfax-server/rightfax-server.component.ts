import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-rightfax-server',
  templateUrl: './rightfax-server.component.html',
  styleUrls: ['./rightfax-server.component.css']
})
export class RightfaxServerComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'RIGHTFAX SERVER';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
