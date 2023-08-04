import { Component, OnInit } from '@angular/core';
import { Product } from './product.module';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  availableProducts: Product[] | undefined;

  selectedProducts: Product[] | undefined;

  draggedProduct: Product | undefined | null;

  ngOnInit() {
      this.selectedProducts = [];
      this.availableProducts = [
          {id:'1', name: 'Black Watch'},
          {id:'2', name: 'Bamboo Watch'}
      ]
  }

  dragStart(product: Product) {
      this.draggedProduct = product;
  }

  drop() {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
          this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = null;
      }
  }

  dragEnd() {
      this.draggedProduct = null;
  }

  findIndex(product: Product) {
      let index = -1;
      for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
          if (product.id === (this.availableProducts as Product[])[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }

}
