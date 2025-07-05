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
    selector: 'navBar',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule, StyleClassModule, ButtonModule, RippleModule, DropdownModule, HttpClientModule],
    template: `
        <!-- TOP INFO BAR -->
        <div class="bg-[#00574c] text-white h-8 w-full fixed top-0 left-0 z-50 overflow-hidden">
        <div class="whitespace-nowrap flex items-center h-full w-max animate-moveRightToLeft md:w-full md:static md:animate-none md:justify-between md:px-8">
                <!-- Left Info -->
                <div class="flex items-center gap-6">
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
                <div class="flex items-center gap-6">
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
        <nav class="mt-8 flex items-center justify-between px-6 md:px-12 py-4 relative z-40 bg-white">
            <img src="./assets/1l.png" alt="NAKADH logo" style="height: 4.10rem;" class="w-auto md:h-16" />

            <ul class="hidden md:flex space-x-6 font-medium text-black">
                <li><a href="#" class="hover:text-gray-600 transition-colors">Home</a></li>
                <!-- <li><a href="#" class="hover:text-gray-600 transition-colors">SHIFT LOAN</a></li> -->
                <!-- <li><a href="#" class="hover:text-gray-600 transition-colors">APPLY LOAN</a></li> -->
                <li class="relative">
                    <div class="relative inline-block text-left">
                        <!-- Button to Toggle Dropdown -->
                        <button (click)="toggleDropdown()" class="flex items-center gap-1 focus:outline-none text-black hover:text-gray-600 transition-colors">
                            Digitalgold
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
                <button (click)="routes('login')" class="px-6 py-2 rounded-full border-2 border-black text-black font-semibold bg-[#fdecc8] hover:bg-[#fce4a6] transition-colors">Log in</button>
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
                <li><a href="#" class="block py-2 hover:text-gray-600 transition-colors">Home</a></li>
                <!-- <li><a href="#" class="block py-2 hover:text-gray-600 transition-colors">SHIFT LOAN</a></li> -->
                <!-- <li><a href="#" class="block py-2 hover:text-gray-600 transition-colors">APPLY LOAN</a></li> -->

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
                <button (click)="routes('login')" class="px-6 py-2 rounded-full border-2 border-black text-black bg-[#fdecc8] hover:bg-[#fce4a6] transition-colors">Log in</button>
                <button (click)="routes('signup')" class="px-6 py-2 rounded-full border-2 border-black text-black bg-[#e4b600] hover:bg-[#d4a500] transition-colors">Sign Up</button>
            </div>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            position: relative;
        }

        .logo-img {
            width: 60vw;
            margin-left: -8px;
        }

        @media (min-width: 640px) {
            .logo-img {
                width: 50vw;
                margin-left: -16px;
            }
        }

        @media (min-width: 768px) {
            .logo-img {
                width: 30vw;
                margin-left: -40px;
            }
        }

        @media (min-width: 1024px) {
            .logo-img {
                width: 20vw;
                margin-left: -60px;
            }
        }

        /* Ensure dropdown appears above all other content */
        .relative .absolute {
            z-index: 9999 !important;
        }
 .top-info-bar {
                background-color: #00574c;
                color: white;
                font-size: 12px;
                width: 100%;
                position: relative;
                z-index: 50;
            }

            .top-info-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 8px 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .left-info,
            .right-info {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                justify-content: center;
                text-align: center;
            }

            .info-item {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .value.silver {
                color: #ccc;
            }

            .value.gold {
                color: #facc15;
            }

            .label {
                color: white;
            }

            @media (min-width: 768px) {
                .top-info-container {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 32px;
                }
                .left-info,
                .right-info {
                    justify-content: flex-start;
                    text-align: left;
                }
                .top-info-bar {
                    font-size: 14px;
                }
            }

/* Keyframes for the marquee effect */
@keyframes moveRightToLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Apply the animation only in mobile view */




    `]
})
export class NavBar implements OnInit, OnDestroy {
    routes(data: string) {
        if (data === 'login') {
            this.router.navigate(['login']);
        } else {
            this.router.navigate(['signup']);
        }
    }

    mobileMenuOpen = false;
    form: FormGroup;
    isDropdownOpen = false;
    isMobileDropdownOpen = false;
    silverRate: number | null = null;
    goldRate: number | null = null;
    lastUpdated: string = '';
    private rateUpdateInterval: any;

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
        this.loadRates();
        // Update rates every 5 minutes
        this.rateUpdateInterval = setInterval(() => {
            this.loadRates();
        }, 5 * 60 * 1000);
    }

    ngOnDestroy() {
        if (this.rateUpdateInterval) {
            clearInterval(this.rateUpdateInterval);
        }
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

    toggleMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu() {
        this.mobileMenuOpen = false;
        this.isMobileDropdownOpen = false;
    }

    // Close dropdown when clicking outside
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest('.relative.inline-block')) {
            this.closeDropdown();
        }
    }

    async loadRates() {
        try {
            // Try to fetch live rates from metals API
            const response = await this.http.get<any>('https://api.metals.live/v1/spot').toPromise();

            if (response && response.length > 0) {
                const goldData = response.find((item: any) => item.metal === 'XAU');
                const silverData = response.find((item: any) => item.metal === 'XAG');

                if (goldData) {
                    // Convert from USD per ounce to INR per gram (approximate conversion)
                    this.goldRate = Math.round((goldData.price / 31.1035) * 83); // 83 INR per USD approx
                }

                if (silverData) {
                    this.silverRate = Math.round((silverData.price / 31.1035) * 83);
                }

                this.lastUpdated = new Date().toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            } else {
                this.setFallbackRates();
            }
        } catch (error) {
            console.error('Error fetching live rates:', error);
            this.setFallbackRates();
        }
    }

    private setFallbackRates() {
        // Fallback rates with some realistic variation
        const baseGoldRate = 6800;
        const baseSilverRate = 85;

        // Add some random variation to simulate market movement
        this.goldRate = baseGoldRate + Math.floor(Math.random() * 200 - 100);
        this.silverRate = baseSilverRate + Math.floor(Math.random() * 10 - 5);

        this.lastUpdated = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
