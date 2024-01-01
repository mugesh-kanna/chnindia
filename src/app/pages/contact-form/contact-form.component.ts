import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup
  submitted: boolean = false;
  service: any;
  dropValues: any[] = [];
  type: any;

  constructor(private fb: FormBuilder, private pagesService: PagesService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9,9}$')]),
      product: new FormControl('')
    });
    this.service = (this.pagesService.getContactFormValue())['service'];
    this.dropValues = (this.pagesService.getContactFormValue())['dropValues'];
    this.type = (this.pagesService.getContactFormValue())['type'];
    if (this.type == 2) {
      this.contactForm.controls.product.setValidators(Validators.required);
    }
    else {
      this.contactForm.controls.product.setValidators(null);
    }
    this.contactForm.controls.product.updateValueAndValidity();
  }

  submitContactForm() {
    this.submitted = true;
    if (this.contactForm.valid) {

    }
    else {

    }
  }

}
