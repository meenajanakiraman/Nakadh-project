import { footerpage } from './../footer.component';
import { Component } from '@angular/core';
import { NavBar } from '../navBar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NavBar,footerpage,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

