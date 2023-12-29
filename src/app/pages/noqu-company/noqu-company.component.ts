import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noqu-company',
  templateUrl: './noqu-company.component.html',
  styleUrls: ['./noqu-company.component.css']
})
export class NoquCompanyComponent implements OnInit {

  pdfLink = '../../../assets/pdf/NoQu.pdf';

  constructor() { }

  ngOnInit(): void {
  }

  pdfDownload() {
    const link = document.createElement('a');
    link.href = this.pdfLink;
    link.download = 'noqu.pdf';
    link.click();
  }

}
