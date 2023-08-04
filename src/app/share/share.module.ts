import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';



@NgModule({
  declarations: [
    MenubarComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [
    MenubarComponent
  ]
})
export class ShareModule { }
