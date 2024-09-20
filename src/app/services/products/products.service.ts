import { Injectable } from '@angular/core';
import { BaseHttpService } from '../data-access/base-http.service';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../interfaces/product-interface';

const LIMIT = 5;

@Injectable({
  providedIn: 'root'
  }
)
export class ProductsService extends BaseHttpService {

  getProducts(page:number): Observable<ProductInterface[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`,{
      params: {
        limit: page * LIMIT
      }
    });
  }
}
