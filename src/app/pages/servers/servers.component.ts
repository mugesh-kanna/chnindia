import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'SERVERS';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'Dell PowerEdge R740 Server', code: '1'},
      {name: 'Dell PowerEdge R730 Server', code: '2'},
      {name: 'HP DL380 Gen10 Server', code: '3'},
      {name: 'HP DL380 Gen9 Server', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
