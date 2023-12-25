import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Home } from './Pages/Home/Home.component';
import { Search } from './Pages/Search/Search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Search],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}

