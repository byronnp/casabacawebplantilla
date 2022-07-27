import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
import { WishListService } from '../../../shared/service/e-commerce/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public product: Observable<Products[]> = of([]);
  public wishlistItems: Products[] = [];

  constructor(private router: Router, private wishlistService: WishListService,
    private productsService: ProductsService, private cartService: CartService) {
    this.product = this.wishlistService.getProducts();
    this.product.subscribe(products => this.wishlistItems = products);
  }

  ngOnInit() { }

  // Add to cart
  public addToCart(product: Products, quantity: number = 1) {
    if (quantity > 0)
      this.cartService.addToCart(product, quantity);
    this.wishlistService.removeFromWishlist(product);
  }

  // Remove from wishlist
  public removeItem(product: Products) {
    this.wishlistService.removeFromWishlist(product);
  }

}
