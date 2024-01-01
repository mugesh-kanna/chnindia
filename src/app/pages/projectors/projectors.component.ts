import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-projectors',
  templateUrl: './projectors.component.html',
  styleUrls: ['./projectors.component.css']
})
export class ProjectorsComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'PROJECTORS';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'NEC', code: '1'},
      {name: 'EPSON', code: '2'},
      {name: 'SONY', code: '3'},
      {name: 'BENQ', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
