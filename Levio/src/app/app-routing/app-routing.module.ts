


import { Routes ,RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import {LoginComponent} from '../login/login.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},

      { path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
