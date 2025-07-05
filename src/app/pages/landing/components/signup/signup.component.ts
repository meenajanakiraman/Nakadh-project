import { footerpage } from './../footer.component';
import { Component } from '@angular/core';
import { NavBar } from '../navBar.component';

@Component({
  selector: 'app-signup',
  imports: [NavBar,footerpage],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
