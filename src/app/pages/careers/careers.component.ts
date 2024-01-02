import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AWS from 'aws-sdk';

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
  fileName: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.appliactionForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]),
      file: new FormControl(''),
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

  onSelectFile(event){
    if (event.target.files && event.target.files[0]) {
        var doc_file = event.target.files;
        this.fileName = event.target.files[0].name;
        // this.imageName = event.target.files[0].name;
        var splittedName = this.fileName.split(".");
        var fileType = splittedName[1];
        const fileReader: FileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = (event: Event) => {
            this.appliactionForm.controls.file.setValue(fileReader.result);
        }        
      }
  }

  submitForm(){
    this.submitted = true;
    if(this.appliactionForm.valid){
      var subject = 'Job applying for ' + this.modalHeader;
      AWS.config.update({
        accessKeyId: 'AKIA5K53FKAPBNS73IE5',
        secretAccessKey: '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',
        region: 'ap-south-1'
      });

      // Create sendEmail params 
      const params = {
        Destination: {
          ToAddresses: [
            's.lathika1312@gmail.com',
            /* more items */
          ]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<p><b>Name:</b> ${this.appliactionForm.value.name},</p>
              <p><b>Mobile Number:</b> ${this.appliactionForm.value.mobile},</p>
              <p><b>Email Address:</b> ${this.appliactionForm.value.email},</p>
              <p><b>Message:</b> ${this.appliactionForm.value.message},</p>`
            },
            // Text: {
            //   Charset: 'UTF-8',
            //   Data: 'This is the body of your email.'
            // }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: subject
          }
        },
        Source: 'gmkanna532000@gmail.com', // Sender email address
        // ReplyToAddresses: [optional, add if needed]
      };

      // Create the promise and SES service object
      const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

      // Handle promise's fulfilled/rejected states
      sendPromise.then(
        function (data) {
          console.log('Email sent successfully. MessageId:', data.MessageId);
          window.alert('Submitted Successfully');
        }).catch(
          function (err) {
            console.error('Error sending email:', err, err.stack);
            window.alert('Unable to Submit')
          });
      this.appliactionForm.reset();
    }
    else{
      window.alert('Please fill the form correctly');
    }
  }

}
