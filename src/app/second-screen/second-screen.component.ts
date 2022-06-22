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

  validateEmail(email: string) {
    let properEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

    if (!email.match(properEmail)) return true
    if (email[0] === "." || email[email.length - 1] === ".") return true

    let atCount = 0
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        atCount += 1
      }
    }
    if (atCount > 1) return true

    return false
  }

  validatePassword(password: string) {
    let properPassword = /[a-z0-9$@!]/

    if (!password.match(properPassword)) return [true, "Password cannot be empty"]
    if (password.length < 8) return [true, "Password must be at least 8 characters long"]

    let hasSymbol = false
    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) return [true, "Password can't have any consecutively repeating characters"]
      if(password[i] === "$" || password[i] === "@" || password[i] === "!") {
        hasSymbol = true
      }
    }
    if (!hasSymbol) return [true, "Password must contain at least 1 of these symbols $ @ !"]

    return [false, ""]
  }

  attemptReset() {
    if (this.validateEmail(this.email)) { // Validate email
      return this.error = "Please enter a valid email"
    } 

    let passwordCheck = this.validatePassword(this.newPassword) // validates if password is strong (at least 8 chars and no consecutive repeating chars)
    if (passwordCheck[0] === true) { 
      return this.error = `${passwordCheck[1]}`
    }

    if (this.newPassword !== this.confirmPassword) { // checks if pass and confirm pass match
      return this.error = "Passwords must match"
    }

    this.error = ""

    const data = { email: this.email, newPassword: this.newPassword } // mock JSON

    this.changeConfirmed = true
    
    console.log("Data: ", data)
    return data // Make api call and use backend logic to reset pass for account linked to email
  }

}
