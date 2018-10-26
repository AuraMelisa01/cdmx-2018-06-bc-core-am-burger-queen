import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  menuListComida: Menu[];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getDesayuno();
    this.resetForm();

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

  onSubmit(menuForm:NgForm){
    if(menuForm.value.$key == null)
    this.menuService.addComida(menuForm.value)
    else
      this.menuService.updateComida(menuForm.value);
      this.resetForm(menuForm);

  }

  resetForm(menuForm?:NgForm){
    if(menuForm != null)
      menuForm.reset();
      this.menuService.selectedMenuComida = new Menu();
  }

  updateComida(menu: Menu) {
    this.menuService.selectedMenuComida = Object.assign({}, menu);
    console.log(menu);
  }

  deleteComida($key: string) {
    if(confirm('¿Estás seguro de eliminar el registro?')) {
      this.menuService.deleteComida($key);
      // this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }

}
