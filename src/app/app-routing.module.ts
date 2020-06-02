import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }, 
  { path: 'novo-pedido', loadChildren: './novo-pedido/novo-pedido.module#NovoPedidoPageModule' },
  { path: 'novo-pedido/:id', loadChildren: './novo-pedido/novo-pedido.module#NovoPedidoPageModule' },
  { path: 'list-pedido', loadChildren: './list-pedido/list-pedido.module#ListPedidoPageModule' },
  { path: 'detalhe-pedido/:id', loadChildren: './detalhe-pedido/detalhe-pedido.module#DetalhePedidoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
