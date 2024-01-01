import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-printers-scanners',
  templateUrl: './printers-scanners.component.html',
  styleUrls: ['./printers-scanners.component.css']
})
export class PrintersScannersComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'PRINTERS & SCANNERS';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Epson WorkForce Enterprise WF-C20590', code: '1'},
      {name: 'CANNON PIXMA G7070', code: '2'},
      {name: 'HP Scanjet Pro 4500 fn1 Network Scanner', code: '3'},
      {name: 'Canon CanoScan Lide 300 Scanner', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
