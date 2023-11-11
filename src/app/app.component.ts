import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular App'
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      console.log(products);
      this.products = products;
    })
  }

}