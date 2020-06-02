import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { PedidoList } from '../pedido-list';
import { Pedido } from '../pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.page.html',
  styleUrls: ['./list-pedido.page.scss'],
})
export class ListPedidoPage implements OnInit {
 
  private selectedItem: any; 
  public items: Array<{ pedido: Pedido; icon: string , url: string}> = [];

  constructor(private pedidoService: PedidoService, private router: Router) { 
    this.pedidoService.getAll().then((data) =>{
      console.log(data);
      data.forEach(elemento => { 
        this.items.push({
          pedido: elemento.pedido,
          icon: 'basket',
          url: '/detalhe-pedido/' + elemento.pedido.key
        })
      });
    }) 
  }

  home(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit() {
  }

}
