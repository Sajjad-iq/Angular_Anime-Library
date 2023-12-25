import { Routes } from '@angular/router';
import { Home } from './Pages/Home/Home.component';
import { Search } from './Pages/Search/Search.component';

export const routes: Routes = [{ path: '', component: Home }, { path: 'search', component: Search },]
