import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: any[]=[];

  @HostListener('window:scroll', ['$event']) getScrollHeight() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      let header: HTMLElement = document.querySelector(
        '.navbar'
      ) as HTMLElement;
      if (window.pageYOffset >= 60) {
        header.parentElement!.classList.add('fixed-on-scroll');
      } else {
        header.parentElement!.classList.remove('fixed-on-scroll');
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        label: 'HOME',
        icon: 'fa fa-home',
        path: '/pages/home'
      },
      {
        label: 'COMPANY',
        icon: 'fa fa-users',
        path: '',
        subMenu:[
          {
            subMenuItems:[
              {
                label: 'About Us',
                path: ''
              },
              {
                label: 'Careers',
                path: ''
              },
              {
                label: 'Contact Us',
                path: ''
              },
            ]
          }
        ]
      },
      {
        label: 'SERVICES',
        icon: 'fa fa-info-circle',
        path: '',
        subMenu: [
          {
            label: 'INFRA SUPPORT',
            subMenuItems : [
              {
                label: 'End-User Computing',
                path: '/pages/end-user-computing'
              },
              {
                label: 'Cloud Infrastructure',
                path: ''
              },
              {
                label: 'Networking & Server Administration',
                path: ''
              },
              {
                label: 'Security & Surveillance Systems',
                path: ''
              },
              {
                label: 'Data Center Management',
                path: ''
              },
              {
                label: 'Structured Cabling',
                path: ''
              },
            ]
          },
          {
            label: 'SOFTWARE DEVELOPMENT',
            subMenuItems : [
              {
                label: 'Web Design and Development',
                path: ''
              },
              {
                label: 'Mobile Application Development',
                path: ''
              },
              {
                label: 'Gaming Application Development',
                path: ''
              },
            ]
          },
          {
            label: 'CONSULTING',
            subMenuItems : [
              {
                label: 'Recruitment Processing Outsource',
                path: ''
              },
              {
                label: 'HR Outsourcing',
                path: ''
              },
              {
                label: 'Payroll',
                path: ''
              },
              {
                label: 'Temporery and Permanent Staffing',
                path: ''
              },
              {
                label: 'Statutory Compliances',
                path: ''
              },
            ]
          }
        ]
      },
      {
        label: 'PRODUCTS',
        icon: 'fa fa-cog',
        path: '',
        subMenu: [
          {
            label: 'SYSTEMS AND SERVERS',
            subMenuItems : [
              {
                label: 'Servers',
                path: ''
              },
              {
                label: 'Personal Computers',
                path: ''
              },
              {
                label: 'Projectors',
                path: ''
              },
              {
                label: 'Printers & Scanners',
                path: ''
              }
            ]
          },
          {
            label: 'NETWORK AND SECURITY',
            subMenuItems : [
              {
                label: 'Surveillance Systems',
                path: ''
              },
              {
                label: 'Switches & Routers',
                path: ''
              },
              {
                label: 'Managed Wifi',
                path: ''
              },
              {
                label: 'Structured Cables',
                path: ''
              },
              {
                label: 'Data Security & Firewall',
                path: ''
              },
            ]
          },
          {
            label: 'MANAGEMENT SYSTEM',
            subMenuItems : [
              {
                label: 'School Management System',
                path: ''
              },
              {
                label: 'Document Management System',
                path: ''
              },
              {
                label: 'Retail Management System',
                path: ''
              },
            ]
          },
        ]
      },
      {
        label: 'NOQU',
        icon: 'fa fa-briefcase',
        path: ''
      },
      {
        label: 'CHANNEL PARTNERS',
        icon: 'fa fa-handshake-o',
        path: '',
        subMenu: [
          {
            subMenuItems:[
              {
                label : 'NOQU',
                path: ''
              },
              {
                label : 'CHN',
                path: ''
              },
            ]
          }
        ]
      }
    ];
  }

  hasItems(item) {
    return item.subMenu !== undefined ? item.subMenu.length > 0 : false;
  }

  removeFocus() {
    $(".submenu").css("display", "none")
  }


  addFocus(evt) {
    $(".submenu").css("display", "none")
    var string = '.click-style' + evt
    $(string).css({
      "display": "flex",
      "justify-content": "center"
    })
  }

}
