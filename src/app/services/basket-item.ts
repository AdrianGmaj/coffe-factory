import { Product } from "./product";

export interface BasketItem {
    product: Product;
    count: number;
}