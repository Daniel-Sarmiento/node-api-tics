import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:any[];
  formAgregarProducto:FormGroup;
  
  constructor(private apiService:ApiService, private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.incializarFormularioDeAgregarProducto();
    this.getProductos();
  }

  incializarFormularioDeAgregarProducto(){
    this.formAgregarProducto = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        precio: ['', Validators.required]
      }
    );
  }

  getProductos(){
    this.apiService.getProductos().subscribe(res => {
      this.productos = res;
      console.log("res: ", res)
    }, err => console.log("err: ", err));
  }

  deleteProducto(id:number){
    this.apiService.deleteProducto(id).subscribe(res => {
      console.log("Producto eliminado: " + res);
      this.getProductos();
    }, err => { console.log("err: ", err) });
  }

  addProducto(){
    console.log(this.formAgregarProducto.value);
    this.apiService.addProducto(this.formAgregarProducto.value).subscribe(res => {
      console.log("Producto registrado: ", res);
      this.incializarFormularioDeAgregarProducto();
      this.getProductos();
    }, err => { console.log("Error addProducto: ", err)});
  }

}
