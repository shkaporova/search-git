import { Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TablesComponent } from './components/tables/tables.component';
import { BlockDetailsComponent } from './components/block-details/block-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blocks', pathMatch: 'full' },
  { path: 'blocks', component: BlocksComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'detail/:username', component: BlockDetailsComponent },
];
