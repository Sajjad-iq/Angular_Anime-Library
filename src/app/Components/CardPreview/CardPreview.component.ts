import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardTypes } from '../../utils/types';

@Component({
  selector: 'CardPreview',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './CardPreview.component.html',
})


export class CardPreview {
  @Input() SelectedCard: any;
}
