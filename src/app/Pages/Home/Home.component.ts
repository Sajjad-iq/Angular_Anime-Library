import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CardTypes } from '../../utils/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardPreview } from '../../Components/CardPreview/CardPreview.component';
import { LoadingAnimation } from '../../Components/LoadingAnimation/LoadingAnimation.component';
import { ShareData } from '../../services/ShareData';
import { RouterLink } from '@angular/router';
import { WelcomeScreen } from '../../Components/WelcomeScreen/WelcomeScreen.component';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [HttpClientModule, CardPreview, LoadingAnimation, RouterLink, WelcomeScreen],
  templateUrl: './Home.component.html',
})


export class Home implements OnInit, OnChanges {

  HttpClient = inject(HttpClient)
  shareData = inject(ShareData)
  cards: any
  loading: boolean = false

  ngOnInit(): void {
    this.fetchData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true
    this.HttpClient.get<any>('https://anime-db.p.rapidapi.com/anime', {
      headers: {
        'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }, params: {
        page: '1',
        size: '20',
        genres: this.shareData.genres,
        sortBy: 'ranking',
        sortOrder: 'asc'
      },
    }).subscribe(data => {
      this.cards = data
      this.loading = false
      this.shareData.firstLoad = false

    });
  }


  SelectCard(card: CardTypes | any) {
    this.shareData.ShareSelectedCard = card
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
