import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'about-us',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    DropdownModule
  ],
  styles: [`
    .faq-item {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background-color: white;
    }

    .faq-question {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
    }

    .faq-answer {
      padding: 1rem;
      border-top: 1px solid #e5e7eb;
      color: #4b5563;
    }
  `],
  template: `
   <!-- ABOUT US SECTION -->
<section class="px-4 md:px-20 py-10 md:py-12">
  <h2 class="text-2xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 md:mb-14">
    About Us
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
    <!-- Text Content -->
    <div>
      <h2 class="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">Gold loans. simplified.</h2>
      <p class="text-gray-800 mb-4 font-normal text-base md:text-xl leading-relaxed">
        Nakadh is transforming how India accesses gold loans—<br />
        with ease, trust, and speed. <br />
        We offer the highest per gram rate, minimal KYC, and a secure process backed by bank-level gold storage.
      </p>
      <!-- <button
        type="button"
        class="px-4 md:px-6 py-2 rounded-full bg-[#e4b600] text-black font-semibold border border-black text-sm md:text-lg"
      >
        Know More
      </button> -->
    </div>

    <!-- Image -->
    <div class="flex justify-center">
      <img
        src="./assets/aboutuss.png"
        alt="Gold Scale"
        class="w-full max-w-[280px] md:max-w-2xl"
      />
    </div>
  </div>
</section>

    <!-- FAQ SECTION -->
    <section class="px-6 md:px-20 py-16 bg-gray-50">
      <h2 class="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-14">
        Frequently asked questions
      </h2>

      <div class="grid md:grid-cols-3 gap-10">
        <!-- FAQ Accordion -->
        <div class="md:col-span-2 space-y-4">
          <div *ngFor="let faq of faqs; let i = index" class="faq-item">
            <div class="faq-question" (click)="toggleFaq(i)">
              {{ faq.question }}
              <span class="text-yellow-500 text-2xl">{{ openedFaqIndex === i ? '−' : '+' }}</span>
            </div>
            <div *ngIf="openedFaqIndex === i" class="faq-answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>

        <!-- FAQ Contact Card -->
        <div class="bg-white px-6 py-10 rounded-xl shadow-md border text-center flex flex-col items-center max-w-sm mx-auto space-y-5">
      <!-- Icon wrapper for centering and spacing -->
<div class="flex justify-center mb-4">
  <i class="pi pi-envelope text-blue" style="font-size: 60px;"></i>
</div>


  <h4 class="text-xxl font-semibold text-black">Do you have more questions?</h4>

  <p class="text-l text-gray-600 leading-relaxed">
    End-to-end payments and financial management in a single solution.
    Meet the right platform to help realize.
  </p>

 <a
  href="mailto:info@nakadh.com"
  class="inline-block px-6 py-2 rounded-full bg-[#e4b600] text-black font-semibold border border-black text-lg text-center"
>
  Shoot a mail
</a>
</div>

      </div>
    </section>

  `
})
export class Aboutus {
  borrowAmount: number = 200000;
  interestRate: number = 11.4;

  openedFaqIndex: number | null = null;

  faqs = [
    {
      question: 'What is gold loan ?',
      answer: 'A gold loan is a loan in which the borrower offers a certain amount of gold against a loan amount (called loan-to-value or LTV) for a certain period of time.'
    },
    {
      question: 'How gold loan works ?',
      answer: 'Gold is evaluated and weighed. The lender offers a loan amount as per the LTV ratio and keeps the gold as collateral.'
    },
    {
      question: 'Why gold loan ?',
      answer: 'It provides instant liquidity, low interest rates, and minimal documentation.'
    },
    {
      question: 'How will my gold be checked ?',
      answer: 'Nakadh appraisal team are highly experienced in the art of manual gold testing. They come from years of experience, and they undergo extensive training at Nakadh before they start appraising customers jewellery.'
    },
    {
      question: 'Is it really safe ?',
      answer: 'Yes, the pledged gold is stored securely in bank-grade lockers with insurance coverage.'
    }
  ];

  constructor(private fb: FormBuilder, public router: Router) {}

   ngOnInit(): void {
    const ua = navigator.userAgent;
    const inApp = /FBAN|FBAV|Instagram|Messenger|Line|WhatsApp/i.test(ua);
    if (inApp) {
      alert('Please open this page in your default browser to send an email.');
    }
  }

  toggleFaq(index: number): void {
    this.openedFaqIndex = this.openedFaqIndex === index ? null : index;
  }
}
