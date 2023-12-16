import { Component } from "@angular/core";
import { Card } from "../Components/Card/Card.component";

@Component({
    selector: 'Cards',
    standalone: true,
    templateUrl: './Cards.component.html',
    imports: [Card]
})
export class Cards {
    home = '';
}
