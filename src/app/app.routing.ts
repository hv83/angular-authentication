import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {AdminComponent} from '@app/admin/admin.component';
import {AdminAuthGuardService} from '@app/_services/admin-auth-guard.service';
import {AccessdeniedComponent} from '@app/accessdenied/accessdenied.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'denied', component: AccessdeniedComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
