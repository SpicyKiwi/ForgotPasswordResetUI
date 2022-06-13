import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForgotPasswordResetUI';

  forgotPassword: boolean = true

  updateForgotPassword() {
    this.forgotPassword = true
  }

}
