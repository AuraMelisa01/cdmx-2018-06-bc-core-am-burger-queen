import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  menuListDesayuno: Menu[];
  menuListComida: Menu[];


  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  desayuno() {
    this.menuService.getDesayuno();

    return this.menuService.getDesayuno()
      .snapshotChanges().subscribe(item => {
        this.menuListDesayuno = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.menuListDesayuno.push(x as Menu);
        });
      });
  }

  comida() {
    this.menuService.getComida();

    return this.menuService.getComida()
      .snapshotChanges().subscribe(item => {
        this.menuListComida = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.menuListComida.push(x as Menu);
        });
      });
  }


}
