import { Component, input } from '@angular/core';
import { ProductInterface } from '../../../../interfaces/product-interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<ProductInterface>();
}
