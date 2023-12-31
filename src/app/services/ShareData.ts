import { Injectable } from '@angular/core';
import { CardTypes } from '../utils/types';

@Injectable({
    providedIn: 'root'
})
export class ShareData {
    ShareSelectedCard: CardTypes = { genres: ['Action', 'Drama', 'Fantasy'], episodes: 24, status: "Finished Airing", link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood", id: '0', title: "Fullmetal Alchemist: The Sacred Star of Milos", image: "https://cdn.myanimelist.net/images/anime/2/29550.webp", synopsis: "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalidvalley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: amilitaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace." };
    genres: string = "Fantasy,Drama"
    firstLoad: boolean = true
}