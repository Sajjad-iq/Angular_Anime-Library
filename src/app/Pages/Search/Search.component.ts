import { Component, inject } from '@angular/core';
import { CardTypes } from '../../utils/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardPreview } from '../../Components/CardPreview/CardPreview.component';
import { LoadingAnimation } from '../../Components/LoadingAnimation/LoadingAnimation.component';
import { ShareData } from '../../services/ShareData';
import { Router } from '@angular/router';

@Component({
  selector: 'Search',
  standalone: true,
  imports: [HttpClientModule, CardPreview, LoadingAnimation],
  templateUrl: './Search.component.html',
})


export class Search {

  HttpClient = inject(HttpClient)
  cards: any
  loading: boolean = false
  shareData = inject(ShareData)
  router = inject(Router)

  fetchData(searchWord: string): void {

    try {
      this.loading = true
      this.HttpClient.get<any>('https://anime-db.p.rapidapi.com/anime', {
        headers: {
          'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }, params: {
          page: "1",
          size: '20',
          genres: '',
          sortBy: 'ranking',
          sortOrder: 'asc',
          search: searchWord
        },
      }).subscribe(data => {
        this.cards = data
        this.loading = false
      });
    }
    catch {
      window.alert('Something went wrong')
    } finally {
      this.loading = false
    }
  }

  inputChange(event: any) {
    this.fetchData(event.target.value)
  }

  SelectCard(card: CardTypes | any) {
    this.shareData.ShareSelectedCard = card
    this.shareData.genres = card.genres.join(",")
    this.router.navigate([''])
  }


}
