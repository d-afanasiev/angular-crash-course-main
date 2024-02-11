import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) { }

  title = 'angular application';
  // products: IProduct[] = data
  // products: IProduct[] = []

  // products$: Observable<IProduct[]>

  term = ''

  loading = false

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
    throw new Error('Method not implemented.');
  }
}
