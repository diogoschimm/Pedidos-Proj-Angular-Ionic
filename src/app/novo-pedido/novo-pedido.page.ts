import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido'; 
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.page.html',
  styleUrls: ['./novo-pedido.page.scss'],
})
export class NovoPedidoPage implements OnInit {

  nome: string;

  pedido = new Pedido();
  key : string;
  operacao: string;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private datepipe: DatePipe,
    private route: ActivatedRoute 
  ) {  
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.key = this.route.snapshot.paramMap.get('id'); 
      this.pedidoService.getChave(this.key).then((val) =>{
        this.pedido = val;
        this.operacao = 'Editando #' + this.pedido.id;
      })
    }else{
      this.limpar();
    }
  }
  limpar(){
    this.key = '';
    this.operacao = 'Novo Pedido';

    this.pedido.dataPedido = new Date();
    this.pedido.hora = this.formatar(this.pedido.dataPedido.getHours().toString()) + ':' + this.formatar(this.pedido.dataPedido.getMinutes().toString());

    this.pedido.key = 'pedido_' + this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    this.pedido.cliente.nome ='';
    this.pedido.cliente.documento='';
    this.pedido.cliente.telefone ='';
    this.pedido.cliente.email ='';
    this.pedido.cliente.cep ='';
    this.pedido.cliente.endereco ='';
    this.pedido.cliente.numero ='';
    this.pedido.cliente.bairro ='';
    this.pedido.cliente.uf ='MT';
    this.pedido.cliente.cidade ='Cuiabá';
    this.pedido.cliente.complemento ='';

    this.pedido.itens = '';
    this.pedido.valor = undefined;
  }

  save(){       
    if (this.operacao == 'Novo Pedido'){
      this.pedidoService.insert(this.pedido).then(v =>{ 
        console.log('Pedido salvo com sucesso');
        this.router.navigate(['/detalhe-pedido/' + this.pedido.key]);
      })
    }else{
      this.pedidoService.update(this.pedido).then(v =>{ 
        console.log('Pedido atualizado com sucesso');
        this.router.navigate(['/detalhe-pedido/' + this.pedido.key]);
      })
    }
  }
  
  formatar(valor: string){
    if (valor.length == 1){
        return '0' +valor;
    }
    return valor;
  } 
}
