import { Cliente } from './cliente';

export class Pedido {
    key:string
    id: number
    dataPedido: Date
    cliente: Cliente
    itens: string
    hora: string
    valor: number
    formaPagamento: string

    constructor(){
        this.cliente = new Cliente();
    }

    getHora(){ 
        return 
    }

}

