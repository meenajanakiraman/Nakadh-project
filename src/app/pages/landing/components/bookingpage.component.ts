import { DropdownModule } from 'primeng/dropdown';
import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'booking-page',
    imports: [RouterModule,FormsModule, CommonModule,StyleClassModule, ButtonModule, RippleModule,DropdownModule],
    template: `
<!-- Mobile Image -->
<div class="md:hidden w-full flex justify-center">
  <img src="assets/sect2d.png" alt="Gold Offer Mobile"
       class="w-full max-w-lg object-contain" />
</div>

<!-- Desktop Image -->
<div class="hidden md:flex justify-center w-full">
  <img src="assets/sect2m.png" alt="Gold Offer Desktop"
       class="w-full max-w-10xl object-contain" />
</div>











<!-- MAIN TITLE -->
<div class="text-center my-20 mx-20 px-4">
  <h2 class="text-4xl md:text-4xl font-extrabold text-blue-900">
    Your Gold, Your Loan – In Just a<br class="hidden md:block"> Few Easy Steps!
  </h2>
</div>

<!-- STEPS SECTION -->
<div class="grid md:grid-cols-2 gap-10 px-16 items-center mb-16">
  <!-- LEFT: Steps Text -->
  <div class="pl-4 md:pl-10 pr-6">
    <h5 class="text-gray-600 text-2xl mb-2">Easy and Fast</h5>
    <h3 class="text-4xl font-extrabold text-blue-900 mb-6">Book Appointment<br>In 3 Easy Steps</h3>

    <div class="space-y-8">
  <!-- Step 1 -->
  <div class="flex items-start gap-4">
     <div class="bg-yellow-500 text-white font-bold rounded-full aspect-square w-10 sm:w-15 md:w-12 flex items-center justify-center text-sm sm:text-base md:text-lg">1</div>
    <div>
      <div class="font-extrabold text-gray-800 text-base md:text-xl">Step 1</div>
      <div class="text-gray-600 text-xl md:text-base">Meet loan manager & get gold appraised</div>
    </div>
  </div>

  <!-- Step 2 -->
  <div class="flex items-start gap-4">
   <div class="bg-emerald-500 text-white font-bold rounded-full aspect-square w-8 sm:w-10 md:w-12 flex items-center justify-center text-sm sm:text-base md:text-lg">2</div>

    <div>
      <div class="font-extrabold text-gray-800 text-base md:text-xl">Step 2</div>
      <div class="text-gray-600 text-xl md:text-base">Get loan approved instantly</div>
    </div>
  </div>

  <!-- Step 3 -->
  <div class="flex items-start gap-4">
    <div class="bg-yellow-500 text-white font-bold rounded-full aspect-square w-10 sm:w-15 md:w-12 flex items-center justify-center text-sm sm:text-base md:text-lg">3</div>

    <div>
      <div class="font-extrabold text-gray-800 text-base md:text-xl">Step 3</div>
      <div class="text-gray-600 text-xl md:text-base">Gold is securely stored in our bank vaults</div>
    </div>
  </div>
</div>

  </div>

  <!-- RIGHT: Visual Panel -->
  <div class="flex justify-center">
  <img src="./assets/bookstep.png" alt="Steps Visual" class="w-50 h-auto">
  </div>
</div>














        `
})
export class Bookingpage {

constructor(private fb: FormBuilder,public router: Router) {

}

}
