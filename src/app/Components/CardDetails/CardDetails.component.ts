import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'CardDetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './CardDetails.component.html',
})


export class CardDetails {
  @Input() CardData: any
}
