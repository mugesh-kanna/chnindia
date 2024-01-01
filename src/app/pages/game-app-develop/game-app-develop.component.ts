import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-game-app-develop',
  templateUrl: './game-app-develop.component.html',
  styleUrls: ['./game-app-develop.component.css']
})
export class GameAppDevelopComponent implements OnInit {

  contactModal : boolean = false;
  service : string = 'GAMING APPLICATION DEVELOPMENT SERVICE';

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }

  showContactForm(){
    var dropdown = [];
    this.pagesService.setContactFormValue(this.service, dropdown, 1);
    this.contactModal = true;
  }

}
