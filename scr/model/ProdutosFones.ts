import { Produtos } from "./Produtos";

export class ProdutosFones extends Produtos
{
    private _estojo: boolean;
    private _fio: boolean;
    private _tipo: number;

    constructor(numero: number, nome: string, descricao: string, categoria: number, cor: number, estojo: boolean, fio: boolean, tipo: number, preco: number, estoque: number)
    {
        super(numero, nome, descricao, categoria, cor, preco, estoque);
        this._estojo = estojo;
        this._fio = fio;
        this._tipo = tipo;
    }

    public get estojo()
    {
        return this._estojo;
    }

    public set estojo(estojo: boolean)
    {
        this._estojo = estojo;
    }

    public get fio()
    {
        return this._fio;
    }

    public set fio(fio: boolean)
    {
        this._fio = fio;
    }

    public get tipo()
    {
        return this._tipo;
    }

    public set tipo(tipo: number)
    {
        this._tipo = tipo;
    }

    public visualizar(): void
    {
        super.visualizar();

        let fio: string = "";
        switch (this._fio)
        {
            case true:
                fio = "Sim";
                break;
            case false:
                fio = "Não";
                break;
        }

        let estojo: string = "";
        switch (this._estojo)
        {
            case true:
                estojo = "Sim";
                break;
            case false:
                estojo = "Não";
                break;
        }

        let tipo: string = "";
        switch (this._tipo) 
        {
            case 1:
                tipo = "Auricular";
                break;
            case 2:
                tipo = "Intra-auricular";
                break;
            case 3:
                tipo = "On-ear";
                break;
            case 4:
                tipo = "Over-ear"
        }
        console.log("Com fio? " + fio);
        console.log("Com estojo de recarga? " + estojo);
        console.log("Tipo de fone: " + tipo);
    }
}