import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-secure-servilliance-sys',
  templateUrl: './secure-servilliance-sys.component.html',
  styleUrls: ['./secure-servilliance-sys.component.css']
})
export class SecureServillianceSysComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'SECURITY & SURVEIILANCE SYSTEMS SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
