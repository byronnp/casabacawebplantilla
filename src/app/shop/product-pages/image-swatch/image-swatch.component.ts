import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
import { WishListService } from '../../../shared/service/e-commerce/wish-list.service';

@Component({
  selector: 'app-image-swatch',
  templateUrl: './image-swatch.component.html',
  styleUrls: ['./image-swatch.component.scss']
})
export class ImageSwatchComponent implements OnInit {

  public product            :   Products = {};
  public products           :   Products[] = [];
  public counter            :   number = 1; 
  public selectedSize       :   any = '';
  public wishlist           :  boolean = false; 
  closeResult: string;
  active = 1;
  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService, private wishlistService: WishListService,
    private cartService: CartService, private modalService: NgbModal) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService.getProduct(id).subscribe(product => this.product = product)
    });
   }

   ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

  public increment() { 
    this.counter += 1;
}

public decrement() {
    if(this.counter > 1){
       this.counter -= 1;
    }
}

  // Change size variant
  public changeSizeVariant(variant) {
    this.selectedSize = variant;
 }

 // Add to cart
 public addToCart(product: Products, quantity) {
  if (quantity == 0) return false;
  this.cartService.addToCart(product, parseInt(quantity));
}

// Add to cart
public buyNow(product: Products, quantity) {
   if (quantity > 0) 
     this.cartService.addToCart(product,parseInt(quantity));
     this.router.navigate(['/e-commerce/checkout']);
}

// Add to wishlist
public addToWishlist(product: Products) {
  this.wishlist = true;
   this.wishlistService.addToWishlist(product);
}

 productSliderOptions = {
  items: 1,
  nav: false,
  dots:false,
  autoplay: true,
  slideSpeed: 300,
  loop: true
}

productSliderOptions1 = {
  items: 3,
  loop: true,
    margin: 10
}

open(content) {
  this.modalService.open(content, { centered: true , ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

}
