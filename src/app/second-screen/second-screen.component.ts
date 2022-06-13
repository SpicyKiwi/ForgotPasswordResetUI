import { Component, OnInit } from '@angular/core';

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

    if (this.email.indexOf('@') < 0) { // Validate email input contains '@'
      return this.error = "Please enter a valid email"
    } else if (this.newPassword.length < 8) {
      return this.error = "Password must be at least 8 characters" // Strong pass check, can check for additional requirements
    } else if (!this.confirmPassword) {
      return this.error = "Please confirm your password" // checks if user typed into confirm pass field
    } else if (this.newPassword !== this.confirmPassword) {
      return this.error = "Passwords must match" // checks if pass and confirm pass match
    }

    this.error = ""

    const data = { email: this.email, newPassword: this.newPassword } // mock JSON

    this.changeConfirmed = true
    
    console.log("Data: ", data)
    return data // Make api call and use backend logic to reset pass for account linked to email
  }

}
