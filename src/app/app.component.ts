import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular App'
  products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )

    // this.productsService.getAll().subscribe(products => {
    //   console.log(products);
    //   this.products = products;
    //   this.loading = false;
    // })
  }

}
