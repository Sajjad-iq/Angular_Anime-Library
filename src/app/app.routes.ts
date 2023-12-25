import { Routes } from '@angular/router';
import { Home } from './Home/Home.component';
import { Search } from './Search/Search.component';

export const routes: Routes = [{ path: '', component: Home }, { path: 'search', component: Search },]
