export abstract class Produtos {

    private _id: number;
    private _nome: string;
    private _descricao: string;
    private _categoria: number;
    private _cor: number;
    private _preco: number;
    private _estoque: number;

    constructor(numero: number, nome: string, descricao: string, categoria: number, cor: number, preco: number, estoque: number) 
    {
        this._id = numero;
        this._nome = nome;
        this._descricao = descricao;
        this._categoria = categoria;
        this._cor = cor;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get numero() {
        return this._id;
    }

    public set numero(numero: number) {
        this._id = numero;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get descricao() {
        return this._descricao;
    }

    public set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: number) {
        this._categoria = categoria;
    }

    public get cor() {
        return this._cor;
    }

    public set cor(cor: number) {
        this._cor = cor;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get estoque() {
        return this._estoque;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    public visualizar(): void 
    {

        let categoria: string = "";

        switch (this._categoria) 
        {
            case 1:
                categoria = "Fone de Ouvido";
                break;
            case 2:
                categoria = "Caixa de Som";
                break;
        }

        let cor: string = "";
        switch (this._cor)
        {
            case 1:
                cor = "Preto";
                break;
            case 2:
                cor = "Branco";
                break;
            case 3:
                cor = "Verde";
                break;
            case 4:
                cor = "Roxo";
                break;
            case 5:
                cor = "Cinza";
                break;
        }

        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("DADOS DO PRODUTO:");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Identificação: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Descrição: " + this._descricao);
        console.log("Categoria: " + categoria);
        console.log("Cor: " + cor);
        console.log("Preço: " + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(this._preco));
        console.log("Quantidade disponível em estoque: " + this._estoque);
    }
}