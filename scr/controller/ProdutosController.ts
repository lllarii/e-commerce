import { Produtos } from "../model/Produtos";
import readlinesync = require ("readline-sync");
import { ProdutosRepository } from "../repository/ProdutosRepository";
let loop: boolean

export class ProdutosController implements ProdutosRepository
{
    private listaProdutos: Array<Produtos> = new Array<Produtos>();
    numero: number = 0;
    
    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarnoArray(numero);
                
            if (buscaProduto != null)
            {
                buscaProduto.visualizar();
                console.log ("\nDeseja buscar um novo produto?")
            }
            else
            {
                console.log ("\nO produto correspodente ao ID " + numero + " não foi encontrado!");
                console.log ("\nDeseja tentar novamente?")
            }
    }
    listarTodos(): void {
        for (let produto of this.listaProdutos)
        {
            produto.visualizar();
        }

        if (this.listaProdutos.length == 0)
                {
                    console.log("Não há produtos cadastrados.")
                }
    }
    cadastrar(produto: Produtos): void {
        
        this.listaProdutos.push(produto);
        console.log("\nO produto " + produto.nome + " foi cadastrado com sucesso!");     
    }
    atualizar(produto: Produtos): void {
        
        let buscaProduto = this.buscarnoArray(produto.numero);

        if (buscaProduto != null)
        {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO produto correspondente ao número " + produto.numero + " foi atualizado com sucesso!");
        }
        else
        {
            console.log("\nO produto correspondente ao número " + produto.numero + " não foi encontrado!");
        }
        
    }

    deletar(numero: number): void {
            let buscaConta = this.buscarnoArray(numero);

            if(buscaConta != null)
            {
                this.listaProdutos.splice(this.listaProdutos.indexOf(buscaConta), 1);
                console.log("\nO produto correspondente ao número " + numero + " foi excluído com sucesso!");
                console.log ("\nDeseja deletar outro produto?")
            }
            else
            {
                console.log("\nO produto correspondente ao número " + numero + " não foi encontrado!");
                console.log ("\nDeseja tentar novamente?")
            }
    }
    // sacar(numero: number, valor: number): void {
    //     let conta = this.buscarnoArray(numero);

    //     if (conta != null)
    //     {
    //         if(conta.sacar(valor) == true)
    //         {
    //             console.log(colors.fg.greenstrong, `\nO saque na conta número: ${numero} foi efetuado com sucesso`, colors.reset);
    //         }
    //     }
    //     else{
    //         console.log(colors.fg.redstrong, `\nA conta número ${numero} não foi encontrada!`, colors.reset);
    //     }
    // }
    // depositar(numero: number, valor: number): void {
    //     let conta = this.buscarnoArray(numero);

    //     if (conta != null)
    //     {
    //         conta.depositar(valor);
    //         console.log(colors.fg.greenstrong, `\nO depósito na conta número: ${numero} foi efetuado com sucesso`, colors.reset);
    //     }
    //     else
    //     {
    //         console.log(colors.fg.redstrong, `\nA conta número ${numero} não foi encontrada!`, colors.reset);
    //     }
    // }
    // transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    //     let contaOrigem = this.buscarnoArray(numeroOrigem);
    //     let contaDestino = this.buscarnoArray(numeroDestino);

    //     if (contaOrigem != null && contaDestino != null)
    //     {
    //         if(contaOrigem.sacar(valor) == true)
    //         {
    //             contaDestino.depositar(valor);
    //             console.log(colors.fg.greenstrong, `\n A transferência da conta número: ${numeroOrigem} para a conta número: ${numeroDestino} foi efetuada com sucesso`, colors.reset);
    //         }
    //     }
    //     else
    //     {
    //         console.log(colors.fg.redstrong,`\nA conta número: ${numeroOrigem} e/ou a conta número: ${numeroDestino} não foram encontradas!`, colors.reset);
    //     }
    // }
    
    //GERAR NÚMERO Do PRODUTO
    public gerarNumero(): number 
    {
        return ++ this.numero;
    }

    //VERIFICA SE O PRODUTO CADASTRADO EXISTE
    public buscarnoArray(numero: number): Produtos | null 
    {
        for (let produto of this.listaProdutos)
        {
            if (produto.numero === numero)
                return produto;
        }
        return null;
    }
}