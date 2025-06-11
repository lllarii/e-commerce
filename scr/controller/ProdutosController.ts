import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";

export class ProdutosController implements ProdutosRepository
{
    private listaProdutos: Array<Produtos> = new Array<Produtos>();
    private produtosFavoritos: Set<Produtos> = new Set<Produtos>();
    numero: number = 0;
    lista: boolean = true
    
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
                    this.lista = false
                }
                else
                {
                    this.lista = true
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
        let buscaProduto = this.buscarnoArray(numero);

        if(buscaProduto != null)
        {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto correspondente ao número " + numero + " foi excluído com sucesso!");
            console.log ("\nDeseja deletar outro produto?")
        }
        else
        {
            console.log("\nO produto correspondente ao número " + numero + " não foi encontrado!");
            console.log ("\nDeseja tentar novamente?")
        }
    }
    
    comprar(numero: number, quantidade: number, desconto: number, frete: number): {nome: string, valor: number}
    {
        let verEstoque = this.quantProduto(numero);
        let nome = this.nomeProduto(numero);
        let preco = this.precoProduto(numero);
        let estoque = verEstoque - quantidade
        this.atualizarEstoque(numero, estoque);
        let valor = (preco*quantidade) + frete - desconto
        console.log("\nA compra foi realizada com sucesso!");
        return {nome, valor}
    }

	favoritar(numero: number): void
    {
        let buscaProduto = this.buscarnoArray(numero);
        
        if (buscaProduto != null)
        {
            let produto = buscaProduto;
            this.produtosFavoritos.add(produto);
            console.log("\nO produto foi adicionado aos favoritos!");
            console.log("Deseja adicionar um novo produto à lista?")
        }
        else
        {
            console.log("\nO produto correspondente ao número " + numero + " não foi encontrado!");
            console.log("Deseja tentar novamente?")
        }
    }

    todosFavoritos(): void {
        for (let produto of this.produtosFavoritos)
        {
            produto.visualizar();
        }

        if (this.produtosFavoritos.size == 0)
            {
                console.log("Não há produtos entre os favoritos.")
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

    public nomeProduto(numero: number): string 
    {
        let nome: string = "";
        for (let produto of this.listaProdutos)
        {
            if (produto.numero === numero)
            {               
                nome = produto.nome                
            }
        }
        return nome;
    }

    public precoProduto(numero: number): number
    {
        let preco: number = 0;
        for (let produto of this.listaProdutos)
        {
            if (produto.numero === numero)
            {               
                preco = produto.preco               
            }
        }
        return preco;
    }

    //verificar quantidade disponível em estoque
    public quantProduto(numero: number): number
    {
        let quant: number = 0;
        for (let produto of this.listaProdutos)
        {
            if (produto.numero === numero)
            {               
                quant = produto.estoque               
            }
        }
        return quant;
    }

    atualizarEstoque(numero: number, estoque: number): void 
    {
        let buscaProduto = this.buscarnoArray(numero);
        if (buscaProduto != null)
        {
            buscaProduto.estoque = estoque
        }
    }
}