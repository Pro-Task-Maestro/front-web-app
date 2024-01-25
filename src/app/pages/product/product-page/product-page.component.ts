import { Component } from '@angular/core';
import { ProductViewCardComponent } from '../../../share/cards/product-view-card/product-view-card.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductViewCardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
