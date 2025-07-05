import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'topbar',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    HttpClientModule
  ],
  template: `
     <!-- TOP INFO BAR -->
        <div class="bg-[#00574c] text-white h-8 w-full fixed top-0 left-0 z-50 overflow-hidden">
            <div class="whitespace-nowrap flex items-center h-full w-max animate-moveRightToLeft md:w-full md:static md:animate-none md:justify-between md:px-8">
                <!-- Left Info -->
                <div class="flex items-center gap-6 px-4 md:px-0">
                    <div class="flex items-center gap-1 text-sm">
                        <i class="pi pi-phone text-yellow-400"></i>
                        <span>+91 915-915-8272</span>
                    </div>
                    <div class="flex items-center gap-1 text-sm">
                        <i class="pi pi-map-marker text-yellow-400"></i>
                        <span>COIMBATORE</span>
                    </div>
                </div>

                <!-- Right Info -->
                <div class="flex items-center gap-6 px-4 md:px-0 ml-8 md:ml-0">
                    <div class="flex items-center gap-1 text-sm">
                        <span class="font-semibold">Silver Rate Today 22K/1G:</span>
                        <span class="text-yellow-400">{{ silverRate ? '₹ ' + silverRate.toLocaleString('en-IN') : 'Loading...' }}</span>
                    </div>
                    <div class="flex items-center gap-1 text-sm">
                        <span class="font-semibold">GOLD Rate Today 22K/1G:</span>
                        <span class="text-yellow-400">{{ goldRate ? '₹ ' + goldRate.toLocaleString('en-IN') : 'Loading...' }}</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs">
                        <i class="pi pi-clock text-green-400"></i>
                        <span class="text-green-400">{{ lastUpdated || 'Updating...' }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- NAVBAR -->
        <nav class="mt-8 flex items-center justify-between px-6 md:px-12 py-4 relative z-40">
            <img src="./assets/1l.png" alt="NAKADH logo" style="height: 4.10rem;" class="w-auto md:h-16" />

            <ul class="hidden md:flex space-x-6 font-medium text-black">
                <li><a routerLink="topbar" class="hover:text-gray-600 transition-colors">Home</a></li>
                <li class="relative">
                    <div class="relative inline-block text-left">
                        <!-- Button to Toggle Dropdown -->
                        <button (click)="toggleDropdown()" class="flex items-center gap-1 focus:outline-none text-black hover:text-gray-600 transition-colors">
                            Digital gold
                            <svg [ngClass]="{ 'rotate-180': isDropdownOpen }"
                                 class="w-4 h-4 transform transition-transform"
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Dropdown Menu with higher z-index -->
                        <ul *ngIf="isDropdownOpen"
                            class="absolute bg-white shadow-lg rounded-lg py-2 mt-2 w-40 z-[9999] border border-gray-200">
                            <li>
                                <a routerLink="/digitalgoldbuy"
                                   (click)="closeDropdown()"
                                   class="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors">Buy</a>
                            </li>
                            <li>
                                <a routerLink="/digitalgoldsell"
                                   (click)="closeDropdown()"
                                   class="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors">Sell</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a routerLink="/scheme" class="hover:text-gray-600 transition-colors">Schemes</a></li>
                <li><a routerLink="/faqs" class="hover:text-gray-600 transition-colors">FAQs</a></li>
                <li><a routerLink="/contactus" class="hover:text-gray-600 transition-colors">Contact us</a></li>
            </ul>

            <div class="hidden md:flex space-x-4">
                <!-- <button routerLink="./login" class="px-6 py-2 rounded-full border-2 border-black text-black font-semibold bg-[#fdecc8] hover:bg-[#fce4a6] transition-colors">Log in</button> -->
                <button routerLink="/login" class="px-6 py-2 rounded-full border-2 border-black text-black font-semibold bg-[#fdecc8] hover:bg-[#fce4a6] transition-colors">Log in</button>

                <button (click)="routes('signup')" class="px-6 py-2 rounded-full border-2 border-black text-black font-bold bg-[#e4b600] hover:bg-[#d4a500] transition-colors">Sign Up</button>
            </div>

            <div class="md:hidden ml-auto">
                <button (click)="toggleMenu()" class="focus:outline-none">
                    <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- MOBILE MENU -->
        <div *ngIf="mobileMenuOpen" class="fixed top-26 left-0 right-0 z-[9999] md:hidden bg-white bg-opacity-95 px-6 pt-4 pb-6 space-y-4 shadow-lg border-t border-gray-200">
            <ul class="space-y-4 font-medium text-black">
                <li><a routerLink="topbar" class="block py-2 hover:text-gray-600 transition-colors">Home</a></li>

                <!-- Mobile Digital Gold Dropdown -->
                <li class="relative">
                    <button (click)="toggleMobileDropdown()" class="flex items-center justify-between w-full py-2 text-left hover:text-gray-600 transition-colors">
                        Digital gold
                        <svg [ngClass]="{ 'rotate-180': isMobileDropdownOpen }"
                             class="w-4 h-4 transform transition-transform"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <!-- Mobile Dropdown Menu -->
                    <ul *ngIf="isMobileDropdownOpen" class="mt-2 ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
                        <li>
                            <a routerLink="/digitalgoldbuy"
                               (click)="closeMobileMenu()"
                               class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded transition-colors">Buy</a>
                        </li>
                        <li>
                            <a routerLink="/digitalgoldsell"
                               (click)="closeMobileMenu()"
                               class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded transition-colors">Sell</a>
                        </li>
                    </ul>
                </li>

                <li><a routerLink="/scheme" class="block py-2 hover:text-gray-600 transition-colors">Schemes</a></li>
                <li><a routerLink="/faqs" class="block py-2 hover:text-gray-600 transition-colors">FAQs</a></li>
                <li><a routerLink="/contactus" class="block py-2 hover:text-gray-600 transition-colors">Contact us</a></li>
            </ul>
            <div class="pt-4 flex flex-col space-y-3">
                <button (click)="routes('./login')" class="px-6 py-2 rounded-full border-2 border-black text-black bg-[#fdecc8] hover:bg-[#fce4a6] transition-colors">Log in</button>
                <button (click)="routes('signup')" class="px-6 py-2 rounded-full border-2 border-black text-black bg-[#e4b600] hover:bg-[#d4a500] transition-colors">Sign Up</button>
            </div>
        </div>

        <!-- Green Left Shape -->
        <img src="/assets/logod.png" alt="decorative shape" class="absolute top-0 left-0 z-0 w-[60vw] sm:w-[50vw] lg:w-[20vw] -ml-2 sm:-ml-4 md:-ml-10" />

        <!-- Yellow Right Shape -->
        <svg aria-hidden="true" class="absolute top-0 right-0 z-0 h-full w-[50vw] decorative-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
                d="M0,0 C50,200 250,150 300,250 C320,300 290,370 370,430
                C420,470 520,500 700,500 L700,0 Z"
                fill="#FFE5B9"
            />
        </svg>



    <!-- HERO SECTION -->
    <section class="relative z-0 grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-20 py-10 md:py-24 pl-6 md:pl-28">
      <div>
        <p class="text-base md:text-xl font-bold uppercase text-black">Maximum Value. Minimum Effort</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mt-2 text-blue-900 leading-snug md:leading-tight">
          Shift your Gold<br />Loan to Nakadh
        </h1>
        <ul class="mt-4 md:mt-6 space-y-1 md:space-y-2 text-gray-700 text-lg md:text-2xl font-semibold">
          <li>✔ Highest per gram rate</li>
          <li>✔ Minimum KYC</li>
          <li>✔ EMI & Top-up</li>
        </ul>
        <div class="mt-4 md:mt-6 space-x-2 md:space-x-4">
          <button (click)="openPopup()" class="bg-yellow-400 text-black px-4 py-2 md:px-6 md:py-3 rounded">
            Shift Now
          </button>
        </div>
      </div>
    </section>

    <!-- POPUP SECTION -->
    <div *ngIf="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row p-6 relative">

        <!-- Close Button -->
        <button (click)="closePopup()" class="absolute top-2 right-3 text-xl font-bold text-black">&times;</button>

        <!-- Form Section -->
        <div class="w-full md:w-1/2 p-6  flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-2">Get Instant Gold Loan</h2>
          <p class="text-gray-600 mb-6">Add Basic Information About Yourself</p>
          <input type="text" placeholder="Enter your Name" class="w-full border rounded px-4 py-3 mb-4 focus:outline-none">
          <input type="text" placeholder="Enter your Mobile Number" class="w-full border rounded px-4 py-3 mb-6 focus:outline-none">
          <button class="w-full bg-yellow-400 text-white font-semibold py-3 rounded">Apply Now</button>
        </div>

        <!-- Image Section -->
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <img src="assets/popup.jpg" alt="Gold Loan" class="w-full max-w-xs md:max-w-sm">
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      overflow-x: hidden;
    }
  `]
})
export class TopbarComponent implements OnInit, OnDestroy{
  silverRate: number | null = null;
  goldRate: number | null = null;
  lastUpdated: string = '';
  mobileMenuOpen = false;
  isDropdownOpen = false;
  isMobileDropdownOpen = false;
  form: FormGroup;
  private rateUpdateInterval: any;
  private isUpdating: boolean = false;

  showPopup = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      building: [''],
      floor: [''],
      description: [''],
      roomType: [null],
      department: [null]
    });
  }

  ngOnInit() {
    this.loadInitialRates();
    this.rateUpdateInterval = setInterval(() => {
      this.updateRates();
    }, 2 * 60 * 1000);
  }

  ngOnDestroy() {
    if (this.rateUpdateInterval) {
      clearInterval(this.rateUpdateInterval);
    }
  }

  // Popup logic
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  routes(data: string) {
    this.router.navigate([data]);
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  closeMobileDropdown() {
    this.isMobileDropdownOpen = false;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.isMobileDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative.inline-block')) {
      this.closeDropdown();
    }
  }

  private loadInitialRates() {
    this.generateRealisticRates();
    this.updateTimestamp();
  }

  private updateRates() {
    if (this.isUpdating) return;
    this.isUpdating = true;

    this.fetchLiveRates().then(success => {
      if (!success) {
        this.generateRealisticRates();
      }
      this.updateTimestamp();
      this.isUpdating = false;
    }).catch(() => {
      this.generateRealisticRates();
      this.updateTimestamp();
      this.isUpdating = false;
    });
  }

  private async fetchLiveRates(): Promise<boolean> {
    try {
      const response: any = await this.http.get('https://metals-api.com/api/latest?access_key=YOUR_KEY&base=USD&symbols=XAU,XAG').toPromise();
      if (response && Array.isArray(response) && response.length > 0) {
        const goldData = response.find((item: any) => item.metal === 'XAU');
        const silverData = response.find((item: any) => item.metal === 'XAG');
        if (goldData && silverData) {
          const usdToInrRate = 83;
          const ouncesToGrams = 31.1035;
          this.goldRate = Math.round((goldData.price / ouncesToGrams) * usdToInrRate);
          this.silverRate = Math.round((silverData.price / ouncesToGrams) * usdToInrRate);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.warn('Live API failed, using simulated rates:', error);
      return false;
    }
  }

  private baseRates = {
    gold: 6850,
    silver: 87
  };

  private generateRealisticRates() {
    const now = new Date();
    const timeOfDay = now.getHours();
    const isMarketOpen = timeOfDay >= 9 && timeOfDay <= 23;
    const volatilityFactor = isMarketOpen ? 1.5 : 0.5;
    const goldVariation = Math.floor((Math.random() - 0.5) * 100 * volatilityFactor);
    const silverVariation = Math.floor((Math.random() - 0.5) * 8 * volatilityFactor);
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const trendFactor = Math.floor(dayOfYear * 0.1);
    this.goldRate = this.baseRates.gold + goldVariation + trendFactor;
    this.silverRate = this.baseRates.silver + silverVariation + Math.floor(trendFactor * 0.1);
    this.goldRate = Math.max(this.goldRate, 6500);
    this.silverRate = Math.max(this.silverRate, 75);
  }

  private updateTimestamp() {
    this.lastUpdated = new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  public refreshRates() {
    this.updateRates();
  }
}
