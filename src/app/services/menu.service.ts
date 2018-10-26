import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList: AngularFireList<any>;
  selectedMenuDesayuno: Menu = new Menu();

  menuListComida: AngularFireList<any>;
  selectedMenuComida: Menu = new Menu();

  constructor(private firebasedb: AngularFireDatabase) { }

  // FUNCIONES PARA DESAYUNO

  getDesayuno() {
    return this.menuList = this.firebasedb.list('Desayuno');
  }

  addDesayuno(menu: Menu) {
    this.menuList.push({
      desayuno: menu.itemDesayuno,
      precio: menu.itemPrecioDesayuno
    });
  }

  updateDesayuno(menu: Menu) {
    this.menuList.update(menu.$key, {
      desayuno: menu.itemDesayuno,
      precio: menu.itemPrecioDesayuno
    });
  }

  deleteDesayuno($key: string) {
    this.menuList.remove($key);
  }

  //FUNCIONES MENU COMIDA

  getComida() {
    return this.menuListComida = this.firebasedb.list('Comida');
  }

  addComida(menu: Menu) {
    this.menuListComida.push({
      desayuno: menu.itemComida,
      precio: menu.itemPrecioComida
    });
  }

  updateComida(menu: Menu) {
    this.menuListComida.update(menu.$key, {
      desayuno: menu.itemComida,
      precio: menu.itemPrecioComida
    });
  }

  deleteComida($key: string) {
    this.menuListComida.remove($key);
  }


}



