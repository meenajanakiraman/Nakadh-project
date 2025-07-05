import { Routes } from '@angular/router';
import { Access } from './access';
// import { login } from './donarlogin';
import { Error } from './error';
import { Login } from '../../../../donar-AngularApp/src/app/pages/auth/login';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login }
] as Routes;
