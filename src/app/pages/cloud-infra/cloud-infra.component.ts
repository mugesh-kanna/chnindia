import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-cloud-infra',
  templateUrl: './cloud-infra.component.html',
  styleUrls: ['./cloud-infra.component.css']
})
export class CloudInfraComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'CLOUD INFRASTRUCTURE SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
