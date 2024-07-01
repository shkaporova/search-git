import { Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TablesComponent } from './components/tables/tables.component';
import { BlockDetailsComponent } from './components/block-details/block-details.component';
import { authGuard, unauthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [unauthGuard] },
  { path: 'blocks', component: BlocksComponent, canActivate: [authGuard] },
  { path: 'tables', component: TablesComponent, canActivate: [authGuard] },
  {
    path: 'detail/:username',
    component: BlockDetailsComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/blocks', pathMatch: 'full' },
  { path: '**', redirectTo: '/blocks' },
];
