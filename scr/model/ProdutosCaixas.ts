import { Produtos } from "./Produtos";

export class ProdutosCaixas extends Produtos
{
    private _tamanho: number;

    constructor(numero: number, nome: string, descricao: string, categoria: number, cor: number, tamanho: number, preco: number, estoque: number)
    {
        super(numero, nome, descricao, categoria, cor, preco, estoque);
        this._tamanho = tamanho;
    }

    public get tamanho()
    {
        return this._tamanho;
    }

    public set tamanho(tamanho: number)
    {
        this._tamanho = tamanho;
    }

    // public sacar(valor: number): boolean 
    // {
    //     if ((this.saldo + this._limite) < valor) 
    //     {
    //         console.log("\n Saldo Insuficiente!");
    //         return false;
    //     }

    //     this.saldo = this.saldo - valor;
    //     return true;
    // }

    public visualizar(): void
    {
        super.visualizar();

        let tamanho: string = "";

        switch (this._tamanho) 
        {
            case 1:
                tamanho = "Pequena";
                break;
            case 2:
                tamanho = "Média";
                break;
            case 3:
                tamanho = "Grande";
                break;
        }
        console.log("Tamanho da caixa: " + tamanho);
    }
}

