import { Component, Input, inject } from '@angular/core';

import { CardTypes } from '../../utils/types';
import { CardDetails } from '../CardDetails/CardDetails.component';
import { ShareData } from '../../services/ShareData';

@Component({
  selector: 'CardPreview',
  standalone: true,
  imports: [CardDetails],
  templateUrl: './CardPreview.component.html',
})


export class CardPreview {

  shareData = inject(ShareData)

  redirectTo(link: string) {
    window.open(link, '_blank');
  }
}
