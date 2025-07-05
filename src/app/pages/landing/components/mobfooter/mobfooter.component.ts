import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-mobfooter',
  standalone: true, // ✅ Ensure this is declared if not already
  imports: [FormsModule], // ✅ Import FormsModule here
  templateUrl: './mobfooter.component.html',
  styleUrls: ['./mobfooter.component.scss']
})
export class MobfooterComponent {
  mobile: string = '';

  sendEmail() {
    if (!this.mobile) {
      alert('Please enter a mobile number.');
      return;
    }

    const templateParams = {
      mobile_number: this.mobile
    };

    emailjs.send(
      'service_vn3fhfk', //service id
      'template_vuyciso', //template id
      templateParams,
      'CRBlH2s2zVWAiuOgB' //public id
    ).then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mobile number submitted successfully!');
      this.mobile = '';
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send. Please try again.');
    });
  }
}
