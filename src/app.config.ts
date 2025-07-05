import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common'; // Uncomment if using

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient(withFetch()), // ✅ Correctly provides HttpClient
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: '.app-dark' }
      }
    }),
    // { provide: LocationStrategy, useClass: HashLocationStrategy } // Optional
  ]
};

// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { appRoutes } from './app.routes';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(
//       appRoutes,
//       withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
//       withEnabledBlockingInitialNavigation()
//     ),
//     provideHttpClient(withFetch()),
//     provideAnimationsAsync(),
//     providePrimeNG({
//       theme: {
//         preset: Aura,
//         options: { darkModeSelector: '.app-dark' }
//       }
//     }),
//     // 👇 This enables HashLocationStrategy
//     { provide: LocationStrategy, useClass: HashLocationStrategy }
//   ]
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { appRoutes } from './app.routes';
// import Aura from '@primeng/themes/aura';
// import { providePrimeNG } from 'primeng/config';
// import { PathLocationStrategy, LocationStrategy } from '@angular/common'; // 👈 import these

// export const appConfig: ApplicationConfig = {
//     providers: [
//         provideRouter(
//             appRoutes,
//             withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
//             withEnabledBlockingInitialNavigation()
//         ),
//         provideHttpClient(withFetch()),
//         provideAnimationsAsync(),
//         providePrimeNG({
//             theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } }
//         }),
//         { provide: LocationStrategy, useClass: PathLocationStrategy } // 👈 explicitly use clean URL strategy
//     ]
// };
