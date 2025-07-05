import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NavBar } from '../navBar.component';
import { footerpage } from '../footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NavBar, footerpage, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  form = {
    name: '',
    mobile: '',
    email: '',
    city: '',
    query: '',
    customer: ''
  };

  sendEmail(e: Event) {
    e.preventDefault();

    const templateParams = {
      name: this.form.name,
      mobile: this.form.mobile,
      email: this.form.email,
      city: this.form.city,
      query: this.form.query,
      customer: this.form.customer
    };

    emailjs.send(
      'service_f2qu1k2',        // ✅ your service ID
      'template_c9gczzg',         // ✅ your template ID (REMOVE SPACES!)
      templateParams,
      'CRBlH2s2zVWAiuOgB'        // ✅ your public key
    ).then(() => {
      alert('Message sent successfully!');
      this.form = { name: '', mobile: '', email: '', city: '', query: '', customer: '' };
    }).catch((error) => {
      console.error('Email send error:', error);
      alert('Failed to send message.');
    });
  }
}
