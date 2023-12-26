import { Component } from '@angular/core';
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation.component';


@Component({
  selector: 'WelcomeScreen',
  standalone: true,
  imports: [LoadingAnimation],
  templateUrl: './WelcomeScreen.component.html',
})


export class WelcomeScreen {

}
