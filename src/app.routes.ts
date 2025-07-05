import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
import { Donarlogin } from './app/pages/auth/donarlogin'; // ✅ Correct import
import { SignupComponent } from './app/pages/landing/components/signup/signup.component';
import { ContactusComponent } from './app/pages/landing/components/contactus/contactus.component';
import { DigitalgoldbuyComponent } from './app/pages/landing/components/digitalgoldbuy/digitalgoldbuy.component';
import { DigitalgoldsellComponent } from './app/pages/landing/components/digitalgoldsell/digitalgoldsell.component';
import { faqsComponent } from './app/pages/landing/components/faqs/faqs.component';
import { SchemeComponent } from './app/pages/landing/components/scheme/scheme.component';
import { LoginComponent } from './app/pages/landing/components/login/login.component';



export const appRoutes: Routes = [
  { path: '', component: Landing },
  { path: 'donarlogin', component: Donarlogin },// 🔁 Reusing LoginComponent here
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'digitalgoldbuy', component: DigitalgoldbuyComponent },
  { path: 'digitalgoldsell', component: DigitalgoldsellComponent },
  { path: 'faqs', component: faqsComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: Landing }
];
