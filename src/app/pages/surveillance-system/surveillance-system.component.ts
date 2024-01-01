import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-surveillance-system',
  templateUrl: './surveillance-system.component.html',
  styleUrls: ['./surveillance-system.component.css']
})
export class SurveillanceSystemComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'SURVEILLANCE SYSTEM';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Bio Metric(eSSL)', code: '1'},
      {name: 'Intrusion Detection System', code: '2'},
      {name: 'Integrated security systems', code: '3'},
      {name: 'Fire Detection System', code: '4'},
      {name: 'Visitor management system', code: '5'},
      {name: 'Premium Quality CCTV cameras', code: '6'},

    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
