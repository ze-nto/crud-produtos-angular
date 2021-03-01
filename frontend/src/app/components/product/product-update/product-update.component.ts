import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // o mais é para converter para number, o método readByID recebe um number
    this.productService.readById(id).subscribe(product => {
      this.product= product;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe( product => {
      this.productService.showMessage('Produto atualizado com Sucesso!');
      this.router.navigate(['/products']);
    })
  }
  
  cancel(): void {
    this.router.navigate(['/products']);

  }

}
