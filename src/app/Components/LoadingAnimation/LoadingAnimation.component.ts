import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'LoadingAnimation',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './LoadingAnimation.component.html',
})


export class LoadingAnimation {

}
