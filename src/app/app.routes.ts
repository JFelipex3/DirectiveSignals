import { Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/products.component';

export const routes: Routes = [

  {
    path: 'products',
    loadComponent: () => import('./products/pages/products.component').then(m => m.ProductsComponent)
  },
  {
    path: '**', redirectTo: 'products'
  }
];
