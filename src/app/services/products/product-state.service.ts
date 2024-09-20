import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductInterface } from '../../interfaces/product-interface';
import { ProductsService } from './products.service';
import { map, startWith, Subject, switchMap } from 'rxjs';

interface State {
  products: ProductInterface[];
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable()
export class ProductStateService {

  private productService = inject(ProductsService);
  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1
  };
  changePage$ = new Subject<number>();

  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.productService.getProducts(page)),
    map((products) => ({ products, status: 'success' as const }))
  );
  //Recibe un estado inicial  y a partir de esto se puede empezar a usar el estado
  state = signalSlice({
    initialState: this.initialState,
    //Llamada a los productos para llenar el estado
    sources: [
      //Mapear la respuesta del observable 
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const }))
      ),
      this.loadProducts$
      
    ]
  });
}
