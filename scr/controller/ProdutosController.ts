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