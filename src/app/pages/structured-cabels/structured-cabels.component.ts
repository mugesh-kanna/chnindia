import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-structured-cabels',
  templateUrl: './structured-cabels.component.html',
  styleUrls: ['./structured-cabels.component.css']
})
export class StructuredCabelsComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'STRUCTURED CABLES';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'CAT5/CAT5E', code: '1'},
      {name: 'CAT 6', code: '2'},
      {name: 'CAT6A', code: '3'},
      {name: 'FIBER OPTIC', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
