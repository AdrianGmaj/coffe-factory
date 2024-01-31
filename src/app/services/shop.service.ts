import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from './ProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shop: Array<Product> = [
    {
      id: 1,
      img: 'assets/home/shop/chemex.jpg',
      name: "chemex",
      price: 100,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
    {
      id: 2,
      img: '/assets/home/shop/coffee-beans.jpg',
      name: "coffee beans",
      price: 30,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
    {
      id: 3,
      img: '/assets/home/shop/coffee-grinder.jpg',
      name: "classic grinder",
      price: 20,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
    {
      id: 4,
      img: '/assets/home/shop/coffee-machine.jpg',
      name: "coffee machine",
      price: 200,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
    {
      id: 5,
      img: '/assets/home/shop/coffee-maker.jpg',
      name: "coffee maker",
      price: 12,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
    {
      id: 6,
      img: '/assets/home/shop/electric-grinder.jpg',
      name: "electric grinder",
      price: 80,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu vehicula sapien. Pellentesque rhoncus orci at porttitor luctus. Suspendisse sed dui consectetur sapien ornare facilisis. Pellentesque in dui ultricies, auctor dui id, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur malesuada magna eget ullamcorper ultrices. Suspendisse sed ligula vestibulum, rutrum turpis ac, iaculis mi."
    },
  ]
  constructor(private http: HttpClient) { }

  getShop() {
    return this.shop
  }

  getProducts(): Observable<Array<ProductResponse>> {
    return this.http.get<Array<ProductResponse>>('/api/products')
  }

  addProduct(value: Product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>('/api/products', value)
  }

  deleteProduct(id):Observable<ProductResponse>{
    return this.http.delete<ProductResponse>(`/api/products/${id}`)
  }

  editProduct(id:number, value:Product){
    return this.http.patch<ProductResponse>(`/api/products/${id}`, value)
  }
}
