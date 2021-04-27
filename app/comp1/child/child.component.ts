import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() productSelected:boolean = false;
  @Input() selectedProduct:string;
  @Output() addedProduct = new EventEmitter<any> ();
  onSelectProduct(product){
    this.productSelected=true;
    this.selectedProduct = product;
  }
  
  onAddProduct(){
    this.addedProduct.emit(this.selectedProduct);
    }
}
