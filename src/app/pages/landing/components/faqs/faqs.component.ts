import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from '../navBar.component';
import { footerpage } from '../footer.component';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-faqs',
  standalone: true, // Important for using imports in component-level
  imports: [CommonModule,NavBar,footerpage,FormsModule], // ✅ Enables *ngIf, ngClass, etc.
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class faqsComponent {
  open1 = false;
  open2 = false;
  open3 = false;
  open4 = false;
  open5 = false;
 userEmail: string = '';

  sendEmail() {
    if (!this.userEmail || !this.userEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const templateParams = {
      user_email: this.userEmail,
    };

    emailjs.send(
      'YOUR_SERVICE_ID',     // e.g. 'service_123abc'
      'YOUR_TEMPLATE_ID',    // e.g. 'template_xyz'
      templateParams,
      'YOUR_PUBLIC_KEY'      // e.g. 'abc123-PUBLIC'
    ).then(() => {
      alert('Email sent successfully!');
      this.userEmail = '';
    }).catch((error) => {
      console.error('Email sending failed:', error);
      alert('Failed to send email.');
    });
  }


}
