import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../../../shared/model/e-commerce/cart.model';
import { CartService } from '../../../../../shared/service/e-commerce/cart.service';
import { OrderService } from '../../../../../shared/service/e-commerce/order.service';
import { ProductsService } from '../../../../../shared/service/e-commerce/products.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  // form group
  public checkoutForm: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public orderDetails: any[] = [];
  public amount: number;
  // public payPalConfig?: PayPalConfig;


  // Form Validator
  constructor(private fb: FormBuilder, private cartService: CartService,
    public productsService: ProductsService, private orderService: OrderService) {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => {
      this.checkOutItems = products
    });
    this.getTotal().subscribe(amount => this.amount = amount);
    this.initConfig();
  }


  // Get sub Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  // stripe payment gateway
  stripeCheckout() {
    if (typeof window !== 'undefined') {
    let handler = (window as any).StripeCheckout.configure({
      key: 'PUBLISHBLE_KEY', // publishble key
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, token.id, this.amount);
      }
    });
    handler.open({
      name: 'Unice',
      description: 'Your Choice Theme',
      amount: this.amount * 100
    })
  }
}

  // Paypal payment gateway
  private initConfig(): void {
    // this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
    //   commit: true,
    //   client: {
    //     sandbox:'CLIENT_ID' //  client Id
    //   },
    //   button: {
    //     label: 'paypal',
    //     size: 'small',    // small | medium | large | responsive
    //     shape: 'rect',     // pill | rect
    //     // color: 'blue',   // gold | blue | silver | black
    //     // tagline: false
    //   },
    //   onPaymentComplete: (data, actions) => {
    //     this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, data.orderID, this.amount);
    //   },
    //   onCancel: (data, actions) => {
    //     console.log('OnCancel');
    //   },
    //   onError: (err) => {
    //     console.log('OnError');
    //   },
    //   transactions: [{
    //     amount: {
    //       currency: this.productsService.currency,
    //       total: this.amount
    //     }
    //   }]
    // });
  }


}
