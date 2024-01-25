import { Component } from '@angular/core';
import { MainSliderComponent } from './inner-items/main-slider/main-slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
