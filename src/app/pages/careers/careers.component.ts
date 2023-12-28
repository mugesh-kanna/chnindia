import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  displayModal: boolean = false;
  modalHeader: string;
  appliactionForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.appliactionForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]),
      file: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }

  showForm(val){
    if(val == 1){
      this.modalHeader = 'Service Engineer'
    }
    else if(val == 2){
      this.modalHeader = 'Sales Executive'
    }
    else if(val == 3){
      this.modalHeader = 'Lead Generation Executive'
    }
    else if(val == 4){
      this.modalHeader = 'Trainee'
    }
    this.appliactionForm.reset();
    this.submitted = false;
    this.displayModal = true;
  }

  submitForm(){
    this.submitted = true;
  }

}
