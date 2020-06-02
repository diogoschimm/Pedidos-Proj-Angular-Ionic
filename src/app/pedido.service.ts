import { Injectable } from '@angular/core'; 
import { Storage } from '@ionic/storage';
import { Pedido } from './pedido';
import { DatePipe } from '@angular/common';
import { PedidoList } from './pedido-list';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoSalvo: Pedido;
  constructor(private storage: Storage, private datepipe: DatePipe) { 
    
  }

  increment(){
    return this.storage.get('pedidoSequence').then((value) =>{  
      let id = 0; 
      if (value){
        id = value;
      }
      return this.setProximoId(id + 1);
    })
  }

   insert(pedido: Pedido){ 
    return this.increment().then(()=>{

    let proxId:number = 0;
    return this.storage.get('pedidoSequence').then((value) =>{  
      if (value){
        proxId = value; 
        pedido.id = proxId;
        this.pedidoSalvo = pedido;
        return this.save(pedido.key, pedido); 
      } else{
        console.error('Valor para pedidoSequence inválido'); 
      }
    }) 
  });
   
  }

   update(pedido: Pedido){
    return this.save(pedido.key, pedido);
  }

   delete(key: string){
    return this.storage.remove(key);
  }

  private save(key: string, pedido: Pedido){
    return this.storage.remove(key).then(()=>{
      return this.storage.set(key, pedido); 
    });
  }
  
  private setProximoId(id){
    return this.storage.remove('pedidoSequence').then(()=>{ 
      return this.storage.set('pedidoSequence', id);
    });
  }

  getChave(key:string){
    return this.storage.get(key); 
  }

   getAll() {
 
    let pedidos: PedidoList[] = [];
 
    return this.storage.forEach((value: Pedido, key: string, iterationNumber: Number) => { 
       
      if (key.includes('pedido_')){  
        let pedido = new PedidoList();
        pedido.key = key;
        pedido.pedido = value;
        pedidos.push(pedido);
      }
      }).then(() => {
          return Promise.resolve(pedidos);
        }).catch((error) => {
          return Promise.reject(error);
      });
  }

}
