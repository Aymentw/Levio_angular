


import { Routes ,RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';


const APP_ROUTES: Routes = [
   { path: '', redirectTo: '/admin', pathMatch: 'full'},

      { path: 'admin', component: AdminComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);