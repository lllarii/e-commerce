import readlinesync = require ("readline-sync");
import { ProdutosFones } from "./scr/model/ProdutosFones";
import { ProdutosCaixas } from "./scr/model/ProdutosCaixas";
import { ProdutosController } from "./scr/controller/ProdutosController";
import { TextoIncompleto } from "./scr/util/exceptions/TextoIncompleto";

export function main ()
{
let menu, numero, categoria, cor, preco, estoque, tipo, tamanho: number;
let nome, descricao: string;
let fio, estojo, loop: boolean;
let produtos: ProdutosController = new ProdutosController();
const tiposProdutos = ['Fone de Ouvido', 'Caixa de Som'];
const coresProdutos = ['Preto', 'Branco', 'Verde', 'Roxo', 'Cinza']
const tiposFones = ['Auricular', 'Intra-auricular', 'On-ear', 'Over-ear'];
const tiposCaixas = ['Pequena', 'Média', 'Grande'];

    while (true)
    {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("                                                     ");
        console.log("                     SOM.COM                         ");
        console.log("                                                     ");        
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Consultar produtos cadastrados       ");
        console.log("            3 - Buscar produto por número            ");
        console.log("            4 - Atualizar produto cadastrado         ");
        console.log("            5 - Apagar produto cadastrado            ");
        console.log("            6 - Comprar                              ");
        console.log("            7 - Favoritar                            ");
        console.log("            8 - Ver lista de favoritos               ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("-----------------------------------------------------");

        console.log("\nDigite a opção desejada: ");
        menu = readlinesync.questionInt("");

        if (menu == 0) 
        {         
            console.log("\n  ~ Agradecemos por navegar nestas ondas sonoras ~");
            console.log("\n                   ~~~~~~~~~~~~~                  ");
            console.log("\n                      SOM.COM                     ");
            console.log("     Quem fala o que quer, ouve o que quiser ;)     ");
            sobre();
            process.exit(0);
        }

        switch (menu) 
        {
            case 1:
                do 
                {
                    console.log("\n\nCADASTRO DE PRODUTOS\n\n");
                    
                    try
                    {
                        console.log("Digite o nome do produto: ");
                        nome = readlinesync.question("");
                        validarTexto(nome);
                    } 
                    catch (error) 
                    {
                        console.error("Erro: " + error);
                        console.log("Por favor, digite um nome com mais de 4 caracteres:");
                        nome = readlinesync.question("");
                        try 
                        { 
                            validarTexto(nome);
                        } 
                        catch (novoErro) 
                        {
                            console.log("Ainda inválido. Encerrando...");
                            main()
                        }
                    }

                    try
                    {
                        console.log("Digite a descrição do produto: ");
                        descricao = readlinesync.question("");
                        validarTexto(descricao);
                    } 
                    catch (error) 
                    {
                        console.error("Erro: " + error);
                        console.log("Por favor, digite uma descrição com mais de 4 caracteres: ");
                        descricao = readlinesync.question("");
                        try 
                        { 
                            validarTexto(descricao);
                        } 
                        catch (novoErro) 
                        {
                            console.log("Ainda inválido. Encerrando...");
                            main();
                        }
                    }

                    console.log("Selecione a categoria do produto: ");
                    categoria = readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) +1;

                    console.log("Selecione a cor do produto: ");
                    cor = readlinesync.keyInSelect(coresProdutos, "", {cancel: false}) +1;

                    console.log("Digite o preço do produto: ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite a quantidade disponível no estoque: ");
                    estoque = readlinesync.questionInt("");

                    switch (categoria)
                    {
                        case 1:
                            console.log("Selecione o tipo de fone:");
                            tipo = readlinesync.keyInSelect(tiposFones, "", {cancel: false}) +1;
                            console.log("O produto tem fio?");
                            fio = readlinesync.keyInYNStrict();
                            console.log("O produto tem estojo?");
                            estojo = readlinesync.keyInYNStrict();
                            produtos.cadastrar(
                                new ProdutosFones(produtos.gerarNumero(), nome, descricao, categoria, cor, estojo, fio, tipo, preco, estoque));
                            break;
                        case 2:
                            console.log("Selecione o tipo de caixa de som:");
                            tamanho = readlinesync.keyInSelect(tiposCaixas, "", {cancel: false}) +1;
                            produtos.cadastrar(
                                new ProdutosCaixas(produtos.gerarNumero(), nome, descricao, categoria, cor, tamanho, preco, estoque));
                            break;                      
                    }

                    console.log ("\nDeseja cadastrar um novo produto?");
                    loop = readlinesync.keyInYNStrict();

                } while (loop == true);

                keyPress();
                break;

            case 2:
                console.log("\n\nCONSULTA DE PRODUTOS CADASTRADOS\n\n");
                produtos.listarTodos();
                keyPress();
                break;

            case 3:
                console.log("\n\nBUSCAR PRODUTO POR NÚMERO\n\n");
                do
                {
                    console.log("Digite o número do produto: ");
                    numero = readlinesync.questionInt("");
                    produtos.procurarPorNumero(numero);
                    loop = readlinesync.keyInYNStrict();
                } while (loop == true)

                keyPress();
                break;

            case 4:
                do
                {
                    console.log("\n\nATUALIZAR PRODUTO CADASTRADO\n\n");
                        console.log("Digite o número do produto: ");
                        numero = readlinesync.questionInt("");

                        let produto = produtos.buscarnoArray(numero);

                        if (produto != null)
                        {
                        try
                        {
                            console.log("Digite o nome do produto: ");
                            nome = readlinesync.question("");
                            validarTexto(nome);
                        } 
                        catch (error) 
                        {
                            console.error("Erro: " + error);
                            console.log("Por favor, digite um nome com mais de 4 caracteres:");
                            nome = readlinesync.question("");
                            try
                            { 
                                validarTexto(nome);
                            } 
                            catch (novoErro) 
                            {
                                console.log("Ainda inválido. Encerrando...");
                                main();
                            }
                        }

                        try
                        {
                            console.log("Digite a descrição do produto: ");
                            descricao = readlinesync.question("");
                            validarTexto(descricao);
                        }
                        catch (error)
                        {
                            console.error("Erro: " + error);
                            console.log("Por favor, digite uma descrição com mais de 4 caracteres: ");
                            descricao = readlinesync.question("");
                            try
                            { 
                                validarTexto(descricao);
                            } 
                            catch (novoErro) 
                            {
                                console.log("Ainda inválido. Encerrando...");
                                main();
                            }
                        }

                        console.log("Selecione a categoria do produto: ");
                        categoria = readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) +1;

                        console.log("Selecione a cor do produto: ");
                        cor = readlinesync.keyInSelect(coresProdutos, "", {cancel: false}) +1;

                        console.log("Digite o preço do produto: ");
                        preco = readlinesync.questionFloat("");

                        console.log("Digite a quantidade disponível no estoque: ");
                        estoque = readlinesync.questionInt("");

                        switch (categoria)
                        {
                            case 1:
                                console.log("Selecione o tipo de fone:");
                                tipo = readlinesync.keyInSelect(tiposFones, "", {cancel: false}) +1;
                                console.log("O produto tem fio?");
                                fio = readlinesync.keyInYNStrict();
                                console.log("O produto tem estojo?");
                                estojo = readlinesync.keyInYNStrict();
                                produtos.atualizar(
                                    new ProdutosFones(numero, nome, descricao, categoria, cor, estojo, fio, tipo, preco, estoque));
                                break;
                            case 2:
                                console.log("Selecione o tipo de fone:");
                                tamanho = readlinesync.keyInSelect(tiposCaixas, "", {cancel: false}) +1;
                                produtos.atualizar(
                                    new ProdutosCaixas(numero, nome, descricao, categoria, cor, tamanho, preco, estoque));
                                break;                      
                        }

                        console.log ("\nDeseja atualizar outro produto?");
                        loop = readlinesync.keyInYNStrict();
                    }
                    else
                    {
                        console.log("O produto número: " + numero + " não foi encontrado!");
                        console.log ("\nDeseja tentar novamente?")
                        loop = readlinesync.keyInYNStrict()
                    }                
            } while (loop == true)

                keyPress();
                break;

            case 5:
                console.log("\n\nDELETAR PRODUTO CADASTRADO\n\n");
                do
                {
                    console.log("Digite o número do produto: ");
                    numero = readlinesync.questionInt("");
                    produtos.deletar(numero);
                    loop = readlinesync.keyInYNStrict();
                } while (loop == true);

                keyPress();
                break;
                
            case 6:
                console.log("\n\nCOMPRAR\n\n");
                console.log("\nCatálogo de produtos:");
                produtos.listarTodos();
                if ( produtos.lista == true )
                    {                   
                        do
                        {
                            let pagamento, quantidade, desconto, frete: number;
                            const metodos = ["Pix", "Cartão de Crédito", "Cartão de Débito", "Boleto"];

                            console.log("\n\nDigite o ID do produto que deseja comprar: ");
                            numero = readlinesync.questionInt();

                            let ok = produtos.buscarnoArray(numero);
                            if (ok != null)
                            {
                                console.log("\nDigite a quantidade que será comprada: ")
                                quantidade = readlinesync.questionInt();

                                let verEstoque = produtos.quantProduto(numero);

                                if (quantidade <= verEstoque)
                                {
                                    console.log("\nDigite o método de pagamento: ");
                                    pagamento = readlinesync.keyInSelect(metodos, "", {cancel: false}) +1;
                                    let _pagamento: string = "";

                                    switch (pagamento) 
                                    {
                                        case 1:
                                            _pagamento = "Pix";
                                            break;
                                        case 2:
                                            _pagamento = "Cartão de Crédito";
                                            break;
                                        case 3:
                                            _pagamento = "Cartão de Débito";
                                            break;
                                        case 4:
                                            _pagamento = "Boleto";
                                            break;
                                    }

                                    console.log("\nTem cupom de desconto?");
                                    let resposta = readlinesync.keyInYNStrict();
                                    if (resposta == true)
                                    {
                                        console.log("\nDigite o valor do desconto");
                                        desconto = readlinesync.questionFloat();
                                    }
                                    else
                                    {
                                        desconto = 0
                                    }

                                    console.log("\nDigite o endereço de entrega:");
                                    let endereco = readlinesync.question("");

                                    console.log("\nDigite o valor do frete: ");
                                    frete = readlinesync.questionFloat();

                                    let compras = produtos.comprar(numero, quantidade, desconto, frete);

                                    console.log("\n\n ** Resumo da Compra ** \n");
                                    console.log("Produto: " + compras.nome);
                                    console.log("Quantidade: " + quantidade);
                                    console.log("Método de pagamento: " + _pagamento);
                                    console.log("Endereço de entrega: " + endereco);
                                    console.log("Valor da compra: " + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(compras.valor));

                                    console.log("\nDeseja fazer uma nova compra?")
                                    loop = readlinesync.keyInYNStrict();
                                }
                                else
                                {
                                    console.log("\nA quantidade disponível no estoque não é suficiente para atender ao pedido.");
                                    console.log("Por favor, revise a quantidade e tente novamente.");
                                    console.log("Encerrando esta operação...");
                                    loop = false;
                                }
                            }
                            else
                            {
                                console.log("\nO produto correspondente ao ID " + numero + " não foi encontrado!");
                                console.log ("\nTente novamente com um número válido.")
                                loop = false
                            }

                        } while(loop == true);
                    }
                    else
                    {
                        console.log("Assim, não é possível comprar no momento.");
                    }

                keyPress();
                break;

            case 7:
                console.log("\n\nADICIONAR AOS FAVORITOS\n\n");
                console.log("\nCatálogo de produtos:");
                produtos.listarTodos();
                if ( produtos.lista == true )
                    {              
                        do
                        {
                            console.log("\nDigite o ID do produto para adicioná-lo aos seus favoritos:");
                            numero = readlinesync.questionInt("");

                            produtos.favoritar(numero);

                            loop = readlinesync.keyInYNStrict();
                        } while(loop == true);
                    }
                    else
                    {
                    console.log("Assim, não é possível adicionar aos favoritos no momento.");
                    }
                
                keyPress();
                break;

            case 8:
            console.log("\n\nVER PRODUTOS FAVORITOS\n\n");
            produtos.todosFavoritos();
                keyPress();
                break;

            default:
                console.log("\nDigite uma opção existente!\n");
                keyPress();
                break;
        }
    }
}

export function sobre(): void 
{
    console.log("\n----------------------------------------------------------");
    console.log("Projeto Desenvolvido por: Larissa Teixeira");
    console.log("Estudante de Desenvolvimento FullStack | Generation Brasil");
    console.log("https://github.com/lllarii");
    console.log("-----------------------------------------------------------");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function validarTexto(texto: string): void
{
    if (texto.length < 5) {
        throw new TextoIncompleto("Texto insuficiente para cadastrar produto.") }
}

main();