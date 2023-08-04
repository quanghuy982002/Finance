import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Upload Img',
              icon: 'pi pi-fw pi-file',
              routerLink: 'upload'
          },
          {
              label: 'Drag & Drop',
              icon: 'pi pi-fw pi-pencil',
              routerLink: 'drag-drop'
          },
      ];
  }

}
