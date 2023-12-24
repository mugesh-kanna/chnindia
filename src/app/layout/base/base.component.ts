import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageRevealAnimation } from 'src/app/pages/page-reveal.animation';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  animations: [pageRevealAnimation],
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  menuHide() {
    $(".submenu").css("display", "none")
  }

}
