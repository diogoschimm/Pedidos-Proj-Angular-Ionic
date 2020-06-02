import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.page.html',
  styleUrls: ['./detalhe-pedido.page.scss'],
})
export class DetalhePedidoPage implements OnInit {

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private pedidoService: PedidoService,
      private alertController: AlertController
  ) { }

  key: string;
  pedido: Pedido = new Pedido();

  ngOnInit() { 
    this.key = this.route.snapshot.paramMap.get('id');
    console.log(this.key);
    this.pedidoService.getChave(this.key).then((val) =>{
      this.pedido = val; 
    })
  } 
  home(){
    this.router.navigate(['/list-pedido']);
  }
  editarPedido(){
    this.router.navigate(['/novo-pedido/' + this.key]);
  }

  async  excluirPedido(){
   const alerta =await   this.alertController.create({
      header: 'Confirmar exclusão?',
      message: 'Confirmar exclusão: <br />Pedido #' + this.pedido.id,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary'
        },{
          text: 'Ok',
          handler: () =>{
            this.pedidoService.delete(this.key).then(() =>{
              this.router.navigate(['/list-pedido']);
            })
          }
        }
      ]
    });
    await  alerta.present();    
  }
}
