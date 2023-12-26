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
      // {
      //   label: 'COMPANY',
      //   icon: 'fa fa-users',
      //   path: '',
      //   subMenu:[
      //     {
      //       subMenuItems:[
      //         {
      //           label: 'About Us',
      //           path: '/pages/about-us'
      //         },
      //         {
      //           label: 'Careers',
      //           path: '/pages/careers'
      //         },
      //         {
      //           label: 'Contact Us',
      //           path: '/pages/contact-us'
      //         },
      //       ]
      //     }
      //   ]
      // },
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
                path: '/pages/cloud-infra'
              },
              {
                label: 'Networking & Server Administration',
                path: '/pages/network-server-admin'
              },
              {
                label: 'Security & Surveillance Systems',
                path: '/pages/security-survillaince'
              },
              {
                label: 'Data Center Management',
                path: '/pages/data-center-manage'
              },
              {
                label: 'Structured Cabling',
                path: '/pages/struct-cabling'
              },
            ]
          },
          {
            label: 'SOFTWARE DEVELOPMENT',
            subMenuItems : [
              {
                label: 'Web Design and Development',
                path: '/pages/web-design-develop'
              },
              {
                label: 'Application Development',
                path: '/pages/application-develop'
              },
              {
                label: 'Mobile Application Development',
                path: '/pages/mobile-app-develop'
              },
              {
                label: 'Gaming Application Development',
                path: '/pages/game-app-develop'
              },
              {
                label: 'Payroll Software Service',
                path: '/pages/payroll'
              },
            ]
          },
          {
            label: 'MANPOWER RESOURCING',
            subMenuItems : [
              {
                label: 'Recruitment Processing Outsource',
                path: '/pages/recruit-outsource'
              },
              // {
              //   label: 'HR Outsourcing',
              //   path: '/pages/hr-outsource'
              // },
              {
                label: 'Temporary and Permanent Staffing',
                path: '/pages/temp-per-staffing'
              },
              {
                label: 'IT Support Resources',
                path: '/pages/it-support-resource'
              },
              {
                label: 'Statutory Compliances',
                path: '/pages/statutory-complaince'
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
                path: '/pages/servers'
              },
              {
                label: 'Personal Computers',
                path: '/pages/personal-computers'
              },
              {
                label: 'Projectors',
                path: '/pages/projectors'
              },
              {
                label: 'Printers & Scanners',
                path: '/pages/printers-scanners'
              }
            ]
          },
          {
            label: 'NETWORK AND SECURITY',
            subMenuItems : [
              {
                label: 'Surveillance Systems',
                path: '/pages/surveillance-system'
              },
              {
                label: 'Switches & Routers',
                path: '/pages/switches-routers'
              },
              {
                label: 'Managed Wifi',
                path: '/pages/managed-wifi'
              },
              {
                label: 'Structured Cables',
                path: '/pages/structured-cables'
              },
              {
                label: 'Data Security & Firewall',
                path: '/pages/data-secure-firewall'
              },
            ]
          },
          {
            label: 'SOFTWARE SERVICES',
            subMenuItems : [
              {
                label: 'Rightfax Server',
                path: '/pages/rightfax-server'
              },
              {
                label: 'School Management System',
                path: '/pages/school-management-system'
              },
              {
                label: 'Document Management System',
                path: '/pages/document-management-system'
              },
              {
                label: 'Retail Management System',
                path: '/pages/retail-management-system'
              },
            ]
          },
        ]
      },
      {
        label: 'CAREERS',
        icon: 'fa fa-folder-open',
        path: '/pages/careers'
      },
      {
        label: 'NOQU',
        icon: 'fa fa-briefcase',
        path: '/pages/noqu'
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
                path: '/pages/noqu'
              },
              {
                label : 'CHN',
                path: '/pages/home'
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
