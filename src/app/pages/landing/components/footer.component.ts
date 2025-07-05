import { DropdownModule } from 'primeng/dropdown';
import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { AccordionModule } from 'primeng/accordion';


@Component({
    selector: 'footerpage',
    imports: [AccordionModule,SliderModule,RouterModule,FormsModule, CommonModule,StyleClassModule, ButtonModule, RippleModule,DropdownModule],
    template: `
<footer class="bg-yellow-100 text-sm px-6 md:px-20 py-10 border-t border-gray-300">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">

    <!-- Brand Info -->
    <div>
    <img src="./assets/logo1.png" alt="NAKADH logo" class="h-12 w-auto" />
    <br>
      <p class="text-gray-800 mb-3">
        Nakadh is a customer-centric gold loan provider committed to offering maximum value with minimum effort. We understand the financial needs of our customers and offer transparent, safe, and quick loan services tailored to suit every individual's requirement.
      </p>
      <div class="flex items-center gap-2 text-gray-700">
        <i class="pi pi-phone"></i> +91 915-915-8272
      </div>
      <div class="flex items-center gap-2 text-gray-700 mt-1">
  <i class="pi pi-envelope"></i>
  info&#64;nakadh.com
</div>


      <!-- Social Media -->
      <div class="flex gap-3 mt-4">
        <a href="#"><i class="pi pi-facebook text-xl text-blue-600"></i></a>
        <a href="#"><i class="pi pi-instagram text-xl text-pink-500"></i></a>
        <a href="#"><i class="pi pi-twitter text-xl text-sky-500"></i></a>
        <a href="#"><i class="pi pi-youtube text-xl text-red-600"></i></a>
      </div>
    </div>

    <!-- Quick Links -->
    <div>
      <h4 class="text-green-900 font-semibold mb-3">Quick Links</h4>
     <ul class="space-y-2 text-gray-800">
  <li><a routerLink="./topbar.component.ts">Home</a></li>
  <!-- <li><a href="#">Shift Loan</a></li> -->
  <!-- <li><a href="#">Apply Loan</a></li> -->
  <li><a routerLink="/scheme">Schemes</a></li>
  <li><a routerLink="/faqs">FAQs</a></li>
  <li><a routerLink="/contactus">Contact us</a></li>

  <!-- Digital Gold Dropdown -->
  <li class="group relative">
    <a routerLink="./topbar.component.ts" class="cursor-pointer">Digital gold</a>
    <ul class="absolute hidden group-hover:block bg-white text-gray-800 rounded shadow-lg mt-1 w-32">
      <li><a routerLink="./digitalgoldbuy" class="block px-4 py-2 hover:bg-yellow-100">Buy</a></li>
      <li><a routerLink="./digitalgoldsell" class="block px-4 py-2 hover:bg-yellow-100">Sell</a></li>
    </ul>
  </li>
</ul>

    </div>

    <!-- Branch Info -->
    <div class="md:col-span-2">
      <h4 class="text-green-900 font-semibold mb-3">Our Branches</h4>
      <div class="flex flex-col lg:flex-row items-start gap-4">
        <div>
          <p class="text-green-800 font-medium mb-1">
            <i class="pi pi-map-marker text-green-700"></i> Coimbatore
          </p>
          <p class="text-gray-800">
            Nakadh, 553 NVN Layout, Tatabad, Gandhipuram, Tamil Nadu 641012<br>
            Coimbatore, Tamil Nadu.
          </p>
        </div>
        <a href="https://maps.google.com/?q=Nakadh+553+NVN+Layout+Tatabad+Coimbatore" target="_blank" rel="noopener noreferrer">
          <img src="assets/location.png" alt="Branch Map" class="w-100 h-100 object-cover rounded-md shadow -mt-10">
        </a>
      </div>
    </div>
  </div>

  <!-- Bottom Copyright -->
  <div class="text-center text-gray-700 text-sm border-t pt-4">
    Copyright © 2025 Nakadh. All Rights Reserved.
  </div>
</footer>

        `
})
export class footerpage {
    borrowAmount: number = 200000;
    interestRate: number = 11.4;

constructor(private fb: FormBuilder,public router: Router) {

}

}
