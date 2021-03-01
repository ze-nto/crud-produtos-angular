import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') ;
    this.productService.readById(id).subscribe( product => {
      this.product = product;
    })
  }

  deleteProduct(){
    this.productService.delete(this.product.id).subscribe(()=> {
      this.productService.showMessage('Produto excluído com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
