


import { Routes , RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import {ApplicationBackComponent} from '../admin/Component/job-offer/application-back/application-back.component';
import {AcceuilComponent} from '../front/acceuil/acceuil.component';


const APP_ROUTES: Routes = [
   { path: '', redirectTo: '/admin', pathMatch: 'full'},
      { path: 'admin', component: AdminComponent},
  { path: 'front', component: AcceuilComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);
