import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-noqu-channel-partner',
  templateUrl: './noqu-channel-partner.component.html',
  styleUrls: ['./noqu-channel-partner.component.css']
})
export class NoquChannelPartnerComponent implements OnInit {

  showTemplate: boolean = true;
  partnerForm: FormGroup;
  submitted: boolean = false;
  companyTypes: any[] = [];
  companySizes: any[] = [];
  confirmModal: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.companyTypes = [
      { label: 'Distributor', value: 1 },
      { label: 'Reseller', value: 2 },
      { label: 'Value-Added Reseller', value: 3 },
      { label: 'Others', value: 4 },
    ];
    this.companySizes = [
      { label: '10-20', value: 1 },
      { label: '20-50', value: 2 },
      { label: '50-200', value: 3 },
      { label: '200-500', value: 4 },
      { label: 'Above 500', value: 5 },
    ]
    this.partnerForm = this.fb.group({
      companyName: new FormControl('', Validators.required),
      companyType: new FormControl('', Validators.required),
      otherCompanyType: new FormControl(''),
      companyAddress: new FormControl('', Validators.required),
      companySize: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      mobile: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      website: new FormControl(''),
      socialMedia: new FormControl(''),
    })
  }

  selectCompanyType() {
    this.partnerForm.controls.otherCompanyType.setValue('');
    if (this.partnerForm.value.companyType == 4) {
      this.partnerForm.controls.otherCompanyType.setValidators(Validators.required);
    }
    else {
      this.partnerForm.controls.otherCompanyType.setValidators(null);
    }
    this.partnerForm.controls.otherCompanyType.updateValueAndValidity();
  }

  showForm() {
    this.showTemplate = false;
    this.submitted = false;
    this.partnerForm.reset();
  }

  cancelForm(){
    this.showTemplate = true
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  submitForm() {
    this.submitted = true;
    if (this.partnerForm.valid) {
      var companyType = '';
      var companySize = (this.companySizes.filter(x => x.value == this.partnerForm.value.companySize))[0]['label']
      if (this.partnerForm.value.companyType != 4) {
        companyType = (this.companyTypes.filter(x => x.value == this.partnerForm.value.companyType))[0]['label'];
      }
      else {
        companyType = this.partnerForm.value.otherCompanyType;
      }
      // Set the region and credentials (replace with your actual credentials)
      AWS.config.update({
        accessKeyId: 'AKIA5K53FKAPBNS73IE5',
        secretAccessKey: 's3QVl2qk3VE0aWmibGpMPRVN/oBk6QWvnzHrPbRp',
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
              Data: `<h3></b>Company Information</b></h3>
              <p><b>Company Name:</b> ${this.partnerForm.value.companyName},</p>
              <p><b>Company Type:</b> ${companyType},</p>
              <p><b>Company Address:</b> ${this.partnerForm.value.companyAddress},</p>
              <p><b>Company Size:</b> ${companySize},</p>
              <h3></b>Contact Information</b></h3>
              <p><b>Full Name:</b> ${this.partnerForm.value.fullName},</p>
              <p><b>Email:</b> ${this.partnerForm.value.email},</p>
              <p><b>Contact No:</b> ${this.partnerForm.value.mobile},</p>
              <h3></b>Address</b></h3>
              <p><b>City:</b> ${this.partnerForm.value.city},</p>
              <p><b>State / province:</b> ${this.partnerForm.value.state},</p>
              <p><b>Zip / Postal Code:</b> ${this.partnerForm.value.pincode},</p>
              <h3></b>Additional Information</b></h3>
              <p><b>Website( if applicable):</b> ${this.partnerForm.value.website},</p>
              <p><b>Social media link:</b> ${this.partnerForm.value.socialMedia},</p>`
            },
            // Text: {
            //   Charset: 'UTF-8',
            //   Data: 'This is the body of your email.'
            // }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'NoQu Partner Program Registration'
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
          // window.alert('Submitted Successfully');
        }).catch(
          function (err) {
            console.error('Error sending email:', err, err.stack);
            window.alert('Unable to Submit')
          });
      this.confirmModal = true;
      this.showTemplate = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else {
      window.alert('Please fill the form correctly')
    }
  }

}
