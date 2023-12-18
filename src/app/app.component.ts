import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Home } from './Home/Home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}

/* animeTitle = "Full metal Alchemist: The Sacred Star of Milos"
animeDescription = "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalidvalley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: amilitaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace."
animeImage = "https://cdn.myanimelist.net/images/anime/2/29550.webp" */

/* https://api.thecatapi.com/v1/images/search?limit=10 */