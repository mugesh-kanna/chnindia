import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-recruit-outsource',
  templateUrl: './recruit-outsource.component.html',
  styleUrls: ['./recruit-outsource.component.css']
})
export class RecruitOutsourceComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'RECRUITMENT PROCESS OUTSOURCING SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
