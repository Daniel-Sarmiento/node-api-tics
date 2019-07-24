import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  producto:any;
  formEditarProducto: FormGroup;

  constructor(private route: ActivatedRoute, private api: ApiService, 
    private router: Router, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; 
    
    this.api.getProducto(id).subscribe(res => {
      this.producto = res;
      this.inicializarFormulario();

    }, err => {console.log(err)});
  }

  inicializarFormulario(){
    this.formEditarProducto = this.formBuilder.group({
      nombre: [this.producto.nombre, Validators.required],
      precio: [this.producto.precio, Validators.required]
    })
  }

  editProducto(){
    this.api.editProducto(this.producto.id, this.formEditarProducto.value).subscribe(res => {
      console.log("res", res);
      this.router.navigate(['/productos']);
    }, err => {console.log("err", err)} )
  }

}
