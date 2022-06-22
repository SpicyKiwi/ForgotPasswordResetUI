import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  @Input() forgotPassword: boolean = false

  @Output() updateForgotPassword = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    console.log("attempting to sign in!")
  }

  forgotPasswordClicked() {
    this.forgotPassword = true
    this.updateForgotPassword.emit(this.forgotPassword)
  }


}
