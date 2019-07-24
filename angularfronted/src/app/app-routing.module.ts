import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoEditarComponent } from './components/producto-editar/producto-editar.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto-editar/:id', component: ProductoEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
