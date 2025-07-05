import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import emailjs from 'emailjs-com';

@Component({
  selector: 'schemes-page',
  standalone: true,
  imports: [
    SliderModule,
    RouterModule,
    FormsModule,
    CommonModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    DropdownModule
  ],
  template: `
    <!-- NAKADH SCHEMES -->
    <section class="bg-gray-100 px-10 py-7">
      <div class="text-center my-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-14">
          Nakadh Scheme
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 px-4 md:px-12">
        <!-- Scheme 1 -->
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="flex items-center gap-2 text-green-700 font-bold text-2xl mb-4">
            <img src="assets/not.png" alt="Icon" class="w-14 h-14 object-contain" />
            No Tension Scheme
          </div>
          <ul class="text-gray-700 space-y-2 text-xl font-bold">
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Loan amount below 1 lakh</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Monthly fixed ROI</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Quick Process</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> More LTV</li>
          </ul>
        </div>

        <!-- Scheme 2 -->
        <div class="bg-white p-10 rounded-xl shadow-md">
          <div class="flex items-center gap-2 text-yellow-800 font-bold text-2xl mb-4">
            <img src="assets/175.png" alt="Icon" class="w-14 h-14 object-contain" />
            1.75% Club
          </div>
          <ul class="text-gray-700 space-y-2 text-xl font-bold">
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Loan range from 1 lakh to 5 lakh</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Monthly ROI 1.75%</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Rebate facilities on ROI</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Offers on processing fees</li>
          </ul>
        </div>

        <!-- Scheme 3 -->
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="flex items-center gap-2 text-yellow-600 font-bold text-2xl mb-4">
            <img src="assets/15.png" alt="Icon" class="w-14 h-14 object-contain" />
            1.5% Club
          </div>
          <ul class="text-gray-700 space-y-2 text-xl font-bold">
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Loan starts from 2 lakhs</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Monthly ROI 1.5%</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Gold pick and drop facility provided</li>
            <li><i class="pi pi-check-circle text-green-600 mr-2"></i> Unblock top up benefits</li>
          </ul>
        </div>
      </div>
    </section>

<!-- GOLD EMI CALCULATOR -->
<div id="schemes-section" class="text-center mt-16 mb-8">
  <h2 class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-14">
    Gold EMI Calculator
  </h2>
</div>

<div class="grid md:grid-cols-2 gap-10 px-6 md:px-24 mb-10 items-start">
  <!-- Loan Amount -->
  <div class="flex flex-col">
    <h4 class="font-extrabold text-2xl mb-4 text-left">LOAN AMOUNT</h4>

    <div class="mb-4 relative">
      <div class="flex items-center border border-yellow-500 rounded-lg w-52 px-4 py-2">
        <input
          type="number"
          [(ngModel)]="borrowAmount"
          min="10000"
          max="2500000"
          step="10000"
          class="bg-transparent outline-none text-xl text-right font-semibold w-full text-black"
        />
        <span class="ml-2 text-xl font-bold text-black">INR</span>
      </div>
    </div>

    <p-slider
      [(ngModel)]="borrowAmount"
      [min]="10000"
      [max]="2500000"
      [step]="10000"
      [style]="{ width: '100%' }"
    ></p-slider>

    <div class="flex justify-between mt-2 text-lg font-bold text-gray-700">
      <span>Rs. 10,000</span>
      <span>Rs. 25,00,000</span>
    </div>
  </div>

  <!-- Gold Weight -->
  <div class="flex flex-col">
    <h4 class="font-extrabold text-2xl mb-4 text-left">YOUR GOLD WEIGHT</h4>

    <div class="mb-4 relative align-right">
      <div class="flex items-center border border-yellow-500 rounded-lg w-40 px-4 py-2">
        <input
          type="number"
          [(ngModel)]="goldWeight"
          min="1"
          max="1000"
          class="bg-transparent outline-none text-xl text-right font-semibold w-full text-black"
        />
        <span class="ml-2 text-xl font-bold text-black">grams</span>
      </div>
    </div>

    <p-slider
      [(ngModel)]="goldWeight"
      [min]="1"
      [max]="1000"
      [step]="1"
      [style]="{ width: '100%' }"
    ></p-slider>

    <div class="flex justify-between mt-2 text-lg font-bold text-gray-700">
      <span>1 GRAM</span>
      <span>1 KG</span>
    </div>

    <!-- Karat Selection Centered -->
    <div class="mt-6 text-center">
      <h4 class="font-extrabold text-xl mb-2">KARAT VALUE</h4>
      <div class="flex flex-wrap justify-center gap-3">
        <button
          *ngFor="let karat of karats"
          (click)="selectKarat(karat)"
          [ngClass]="{
            'bg-yellow-400 border-black text-black font-bold': selectedKarat === karat,
            'bg-white border-gray-400 text-gray-700': selectedKarat !== karat
          }"
          class="px-4 py-2 rounded-full border text-sm"
        >
          {{ karat }} KARAT
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Centered Calculate Button -->
<div class="flex justify-center mb-12">
  <button
    (click)="calculateEMI()"
    class="px-6 py-2 rounded-full bg-[#e4b600] text-black font-semibold border border-black text-lg"
  >
    Calculate
  </button>
</div>

    <!-- EMI Result Table
    <div *ngIf="emiResult" class="px-6 md:px-24 mb-12">
      <h3 class="text-xl font-bold mb-4 text-blue-900">Estimated EMI Details</h3>
      <table class="w-full text-left border border-collapse">
        <thead>
          <tr class="bg-gray-200 text-gray-800">
            <th class="p-2 border">Loan Amount</th>
            <th class="p-2 border">Interest Rate</th>
            <th class="p-2 border">Monthly EMI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border">Rs {{ borrowAmount | number }}</td>
            <td class="p-2 border">{{ interestRate }}%</td>
            <td class="p-2 border">Rs {{ emiResult | number:'1.0-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <!-- Mobile Number Popup -->
    <div *ngIf="showMobilePopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-xl w-full max-w-sm text-center shadow-lg">
        <h2 class="text-xl font-bold mb-4">Enter Your Mobile Number</h2>
        <input
          type="text"
          [(ngModel)]="mobile"
          maxlength="10"
          placeholder="Mobile Number"
          class="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-yellow-500"
        />

        <div class="flex justify-between gap-4">
          <button (click)="submitMobile()" class="flex-1 px-4 py-2 bg-yellow-500 text-white font-bold rounded">
            Submit
          </button>
          <button (click)="closePopup()" class="flex-1 px-4 py-2 bg-gray-400 text-white font-bold rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `
})
export class Schemespage {
  borrowAmount: number = 200000;
  interestRate: number = 11.4;
  emiResult: number | null = null;

  showMobilePopup: boolean = false;
  mobile: string = '';

  goldWeight: number = 1;
  karats: number[] = [22, 24];
  selectedKarat: number = 22;

  constructor(private fb: FormBuilder, public router: Router) {}

  calculateEMI() {
    this.showMobilePopup = true;
  }

  submitMobile() {
    if (!this.mobile || this.mobile.length < 10) {
      alert('Please enter a valid mobile number.');
      return;
    }

    const P = this.borrowAmount;
    const r = this.interestRate / 100 / 12;
    const n = 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    this.emiResult = emi;

    const templateParams = {
      mobile: this.mobile,
      borrowAmount: this.borrowAmount,
      goldWeight: this.goldWeight,
      karat: this.selectedKarat,
      emiResult: emi.toFixed(2),
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('EMI details sent to email successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send email.');
      });

    this.showMobilePopup = false;
    this.mobile = '';
  }

  closePopup() {
    this.showMobilePopup = false;
  }

  selectKarat(karat: number) {
    this.selectedKarat = karat;
  }
}
