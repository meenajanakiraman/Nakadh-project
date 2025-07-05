import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'loanoption-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    DropdownModule
  ],
  template: `
    <!-- WHY CHOOSE NAKADH -->
    <section class="px-6 md:px-20 py-10 bg-gray-100">
      <div class="md:flex items-start gap-10">
        <div class="md:w-1/3 mb-6 md:mb-0">
          <h2 class="text-5xl font-Extrabold leading-snug">
            Why Choose <br /><span class="text-green-600">Nakadh?</span>
          </h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 gap-6 text-xl text-gray-700 md:w-2/3 ml-6">
          <div class="flex items-start gap-3">
            <img src="assets/minimal.png" class="w-16 h-16" />
            <span class="text-lg font-bold text-gray-800">Minimal<br /> Documentation</span>
          </div>
          <div class="flex items-start gap-3">
            <img src="assets/door.png" class="w-16 h-16" />
            <span class="text-lg font-bold text-gray-800">Doorstep pick<br /> and drop of gold</span>
          </div>
          <div class="flex items-start gap-3">
            <img src="assets/highest.png" class="w-16 h-16" />
            <span class="text-lg font-bold text-gray-800">Highest per gram rate<br />High LTV</span>
          </div>
          <div class="flex items-start gap-3">
            <img src="assets/your.png" class="w-16 h-16" />
            <span class="text-lg font-bold text-gray-800">Your asset is safe<br />with our partner bank</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LOAN OPTIONS -->
    <section class="px-2 md:px-15 py-10 md:py-16">
      <h2 class="text-lg md:text-4xl font-extrabold text-center text-blue-900 mb-12 md:mb-16">
        Loan Options
      </h2>

      <!-- Shift Loan -->
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-2 md:px-28 py-8 md:py-12">
        <div class="w-full md:w-1/2">
          <h3 class="text-xl md:text-4xl font-extrabold mb-5 text-gray-900">Shift your loan to Nakadh</h3>
          <ul class="text-gray-800 font-semibold text-lg md:text-3xl mb-8 space-y-3">
            <li>✔ Highest per gram rate</li>
            <li>✔ Minimum KYC</li>
            <li>✔ EMI & Top-up options</li>
            <li>✔ Lowest ROI</li>
            <li>✔ Storage in bank Vault</li>
          </ul>
          <button
            type="button"
            (click)="openPopup()"
            class="px-5 md:px-8 py-3 md:py-4 rounded-full bg-[#e4b600] text-black font-semibold border border-black text-base md:text-xl hover:bg-yellow-500 transition"
          >
            Apply Now
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <img src="assets/shiftloan.png" class="rounded-2xl w-full max-w-[320px] md:max-w-[550px]" />
        </div>
      </div>

      <!-- Apply for New Loan -->
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-2 md:px-28 py-8 md:py-12">
        <div class="w-full md:w-1/2 flex justify-center">
          <img src="assets/applyloan.png" class="rounded-2xl w-full max-w-[320px] md:max-w-[550px]" />
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-xl md:text-4xl font-extrabold mb-5 text-gray-900">Apply for new loan</h3>
          <ul class="text-gray-800 text-lg md:text-3xl font-semibold mb-8 space-y-3">
            <li>✔ Highest per gram rate</li>
            <li>✔ Pick up and drop facility</li>
            <li>✔ Future Financial Assistance</li>
            <li>✔ Lowest ROI</li>
            <li>✔ Storage in bank Vault</li>
          </ul>
          <a
            class="px-5 md:px-8 py-3 md:py-4 rounded-full bg-[#e4b600] text-black font-semibold border border-black text-base md:text-xl hover:bg-yellow-500 transition"
            routerLink="./faqs"
          >
            Know More
          </a>
        </div>
      </div>
    </section>

    <!-- POPUP -->
    <div *ngIf="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row p-6 relative">

        <!-- Close Button -->
        <button (click)="closePopup()" class="absolute top-2 right-3 text-xl font-bold text-black">&times;</button>

        <!-- Form -->
        <div class="w-full md:w-1/2 p-6  flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-2">Get Instant Gold Loan</h2>
          <p class="text-gray-600 mb-6">Add Basic Information About Yourself</p>
          <input type="text" placeholder="Enter your Name" class="w-full border rounded px-4 py-3 mb-4 focus:outline-none" />
          <input type="text" placeholder="Enter your Mobile Number" class="w-full border rounded px-4 py-3 mb-6 focus:outline-none" />
          <button class="w-full bg-yellow-400 text-white font-semibold py-3 rounded">Apply Now</button>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <img src="assets/popup.jpg" alt="Gold Loan" class="w-full max-w-xs md:max-w-sm" />
        </div>
      </div>
    </div>
  `
})
export class loanoptionpage {
  showPopup = false;

  constructor(private fb: FormBuilder, public router: Router) {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
