import { NavBar } from '../navBar.component';
import { footerpage } from './../footer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scheme',
  imports:[footerpage,NavBar],
  templateUrl: './scheme.component.html',
  styleUrl: './scheme.component.css'
})
export class SchemeComponent {

}
