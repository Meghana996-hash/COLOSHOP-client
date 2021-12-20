import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  loading=false;
  buttionText = "Submit";

  constructor(public http:HttpService) { }

  ngOnInit(): void {
  }
  get f() { return this.contactForm.controls; }

onSubmit(){
  
  alert("Your query has been received.Will get back to you soon!");
  this.loading = true;
  this.buttionText = "Submiting...";
  let user = {
    name: this.f.fname.value,
    email: this.f.email.value
  }
  this.http.sendEmail("http://localhost:3007/sendmail", user).subscribe(
    data => {
      let res:any = data; 
      console.log(
        ` ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
      );
    },
    err => {
      console.log(err);
      this.loading = false;
      this.buttionText = "Submit";
    },() => {
      this.loading = false;
      this.buttionText = "Submit";
    }
  );
}
}
