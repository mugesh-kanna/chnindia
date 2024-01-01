import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-personal-computers',
  templateUrl: './personal-computers.component.html',
  styleUrls: ['./personal-computers.component.css']
})
export class PersonalComputersComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'PERSONAL COMPUTERS';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [
      {name: 'INSPIRED DESIGN', code: '1'},
      {name: 'NEW OPTIPLEX 7480 ALL-IN-ONE', code: '2'},
      {name: 'LENOVO', code: '3'},
      {name: 'APPLE', code: '4'}
    ];
    this.pagesService.setContactFormValue(this.service, dropdown, 2);
    this.contactModal = true;
  }

}
