import { Component } from '@angular/core';
import { footerpage } from "../footer.component";
import { NavBar } from "../navBar.component";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG modules
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digitalgoldbuy',
  standalone: true,
  imports: [
    footerpage,
    NavBar,
    CommonModule,
    FormsModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToggleButtonModule,
    DialogModule,
    SelectButtonModule
  ],
  templateUrl: './digitalgoldbuy.component.html',
  styleUrl: './digitalgoldbuy.component.scss'
})
export class DigitalgoldbuyComponent {
    constructor(private router: Router) {}

  visible: boolean = false;
  activeStep: number = 1;

  // Form fields
  name: string = '';
  email: string = '';
  password: string = '';

  // Toggle Button Interests
  interests: any = {
    nature: false,
    music: false,
    sports: false,
  };

  // SelectButton for Gold Purity
  selectedPurity: string = '22K';
  purityOptions = [
    { label: '22K', value: '22K' },
    { label: '24K', value: '24K' },
    { label: '18K', value: '18K' }
  ];

  openPopup() {
    this.visible = true;
  }

  proceedToSell() {
  this.router.navigate(['/contactus']);
}

}
