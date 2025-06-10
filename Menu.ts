import readlinesync = require ("readline-sync");
import { ProdutosFones } from "./scr/model/ProdutosFones";
import { ProdutosCaixas } from "./scr/model/ProdutosCaixas";
import { ProdutosController } from "./scr/controller/ProdutosController";

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
                    
                    try{
                    console.log("Digite o nome do produto: ");
                    nome = readlinesync.question("");
                    validarTexto(nome);
                    } catch (error) {
                        console.error("Erro: " + error);
                        console.log("Por favor, digite um nome com mais de 4 caracteres:");
                        nome = readlinesync.question("")
                        try { 
                        validarTexto(nome);
                        } catch (novoErro) {
                            console.log("Ainda inválido. Encerrando...");
                            return;
                        }
                    }

                    try{
                    console.log("Digite a descrição do produto: ");
                    descricao = readlinesync.question("");
                    validarTexto(descricao);
                    } catch (error) {
                        console.error("Erro: " + error);
                        console.log("Por favor, digite uma descrição com mais de 4 caracteres: ");
                        descricao = readlinesync.question("")
                        try { 
                        validarTexto(descricao);
                        } catch (novoErro) {
                            console.log("Ainda inválido. Encerrando...");
                            return;
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

                } while (loop == true)

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
                    loop = readlinesync.keyInYNStrict()
                } while (loop == true)

                keyPress();
                break;
            case 4:
                do
                {
                    console.log("\n\nATUALIZAR PRODUTO CADASTRADO\n\n");
                        console.log("Digite o número do produto: ")
                        numero = readlinesync.questionInt("");

                        let produto = produtos.buscarnoArray(numero);

                        if (produto != null)
                        {
                        try{
                        console.log("Digite o nome do produto: ");
                        nome = readlinesync.question("");
                        validarTexto(nome);
                        } catch (error) {
                            console.error("Erro: " + error);
                            console.log("Por favor, digite um nome com mais de 4 caracteres:");
                            nome = readlinesync.question("")
                            try { 
                            validarTexto(nome);
                            } catch (novoErro) {
                                console.log("Ainda inválido. Encerrando...");
                                return;
                            }
                        }

                        try{
                        console.log("Digite a descrição do produto: ");
                        descricao = readlinesync.question("");
                        validarTexto(descricao);
                        } catch (error) {
                            console.error("Erro: " + error);
                            console.log("Por favor, digite uma descrição com mais de 4 caracteres: ");
                            descricao = readlinesync.question("")
                            try { 
                            validarTexto(descricao);
                            } catch (novoErro) {
                                console.log("Ainda inválido. Encerrando...");
                                return;
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
                        console.log ("\nDeseja atualizar outro produto?")
                        loop = readlinesync.keyInYNStrict()
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
                    loop = readlinesync.keyInYNStrict()
            } while (loop == true)
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
    console.log("\n---------------------------------------------------------");
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
        throw new Error("Texto insuficiente para cadastrar produto.") }
}

main();