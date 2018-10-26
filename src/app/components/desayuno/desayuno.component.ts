import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  menuListDesayuno: Menu[];

  constructor(public menuService: MenuService) { }


  ngOnInit() {
    this.menuService.getDesayuno();
    this.resetForm();

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

  onSubmit(menuForm:NgForm){
    if(menuForm.value.$key == null)
    this.menuService.addDesayuno(menuForm.value)
    else
      this.menuService.updateDesayuno(menuForm.value);
      this.resetForm(menuForm);

  }

  resetForm(menuForm?:NgForm){
    if(menuForm != null)
      menuForm.reset();
      this.menuService.selectedMenuDesayuno = new Menu();
  }

  updateDesayuno(menu: Menu) {
    this.menuService.selectedMenuDesayuno = Object.assign({}, menu);
    console.log(menu);
  }

  deleteDesayuno($key: string) {
    if(confirm('¿Estás seguro de eliminar el registro?')) {
      this.menuService.deleteDesayuno($key);
      // this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }



}
