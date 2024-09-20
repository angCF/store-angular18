import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../../../services/products/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  providers: [ProductStateService] // Dependency Injection using Angular's inject() function. This will ensure the ProductsService is always available throughout the component.
})
export default class ListProductsComponent {
  productsState = inject(ProductStateService);

  changePage() {
    const page = this.productsState.state.page()+1;
    this.productsState.changePage$.next(page); // Emitting an event to the ProductStateService to change the page.
  }
}