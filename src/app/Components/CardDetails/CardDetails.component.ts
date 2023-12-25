import { Component, Input } from '@angular/core';


@Component({
  selector: 'CardDetails',
  standalone: true,
  imports: [],
  templateUrl: './CardDetails.component.html',
})


export class CardDetails {
  @Input() CardData: any
}
