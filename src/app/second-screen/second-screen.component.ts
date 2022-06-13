import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {

  changeConfirmed = false

  email = ""
  newPassword = ""
  confirmPassword = ""

  error = ""

  constructor() { }

  ngOnInit(): void {
  }

  updateEmail(value: string) {
    this.email = value
  }

  updateNewPassword(value: string) {
    this.newPassword = value
  }

  updateConfirmPassword(value: string) {
    this.confirmPassword = value
  }

  attemptReset() {

    if (this.email.indexOf('@') < 0) {
      return this.error = "Please enter a valid email"
    } else if (this.newPassword.length < 8) {
      return this.error = "Password must be at least 8 characters"
    } else if (!this.confirmPassword) {
      return this.error = "Please confirm your password"
    } else if (this.newPassword !== this.confirmPassword) {
      return this.error = "Passwords must match"
    }

    this.error = ""

    const data = { email: this.email, newPass: this.newPassword }

    console.log(data)
    return data // Make api call
  }

}
