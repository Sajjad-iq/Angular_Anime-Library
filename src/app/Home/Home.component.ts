import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardTypes } from '../utils/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardPreview } from '../Components/CardPreview/CardPreview.component';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, CardPreview],
  templateUrl: './Home.component.html',
})


export class Home implements OnInit {

  HttpClient = inject(HttpClient)
  SelectedCard: any = { id: '0', title: "Fullmetal Alchemist: The Sacred Star of Milos", image: "https://cdn.myanimelist.net/images/anime/2/29550.webp", synopsis: "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalidvalley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: amilitaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace." };
  cards: any

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.HttpClient.get<any>('https://anime-db.p.rapidapi.com/anime', {
      headers: {
        'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }, params: {
        page: '1',
        size: '10',
        genres: 'Fantasy,Drama',
        sortBy: 'ranking',
        sortOrder: 'asc'
      },
    }).subscribe(data => {
      this.cards = data
    });
  }

  SelectCard(card: CardTypes | any) {
    this.SelectedCard = card

    function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    }
    smoothscroll()
  }
}

/* animeTitle = "Fullmetal Alchemist: The Sacred Star of Milos"
animeDescription = "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalidvalley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: amilitaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace."
animeImage = "https://cdn.myanimelist.net/images/anime/2/29550.webp" */

/* https://api.thecatapi.com/v1/images/search?limit=10 */