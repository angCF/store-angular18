import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('../list-products/list-products.component')
    },  
    {
        path: "product-detail",
        loadComponent: () => import('../detail-product/detail-product.component')
    },  
] as Routes;