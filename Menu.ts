import readlinesync = require ("readline-sync");
// import { ContaCorrente } from "./scr/model/ContaCorrente";
// import { ContaPoupanca } from "./scr/model/ContaPoupanca";
//import { ProdutosController } from "./scr/controller/ProdutosController";
// import { read } from "fs";

export function main ()
{
let menu, numero: number;
let produtos: ProdutosController = new ProdutosController();


//     let   agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
//     let titular: string;
//     const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

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
        // console.log("            6 - Sacar                                ");
        // console.log("            7 - Depositar                            ");
        // console.log("            8 - Transferir valores entre Contas      ");
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
                console.log("\n\nCADASTRO DE PRODUTOS\n\n");
                
                // console.log("Digite o número da agência: ");
                // agencia = readlinesync.questionInt("");

                // console.log("Digite o nome do titular da conta: ");
                // titular = readlinesync.question("");

                // console.log("Digite o tipo da conta: ");
                // tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) +1;

                // console.log("Digite o saldo da conta (R$): ");
                // saldo = readlinesync.questionFloat("");

                // switch (tipo)
                // {
                //     case 1:
                //         console.log("Digite o limite da conta (R$): ");
                //         limite = readlinesync.questionFloat("");
                //         contas.cadastrar(
                //             new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                //         break;
                //     case 2:
                //         console.log("Digite o dia do aniversário da conta poupança: ");
                //         aniversario = readlinesync.questionInt("");
                //         contas.cadastrar(
                //             new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                //         break;                      
                // }
                keyPress();
                break;
            case 2:
                console.log("\n\nCONSULTA DE PRODUTOS CADASTRADOS\n\n");
                produtos.listarTodas();
                keyPress();
                break;
            case 3:
                console.log("\n\nBUSCAR PRODUTO POR NÚMERO\n\n");

                console.log("Digite o número do produto: ");
                numero = readlinesync.questionInt("");
                produtos.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log("\n\nATUALIZAR PRODUTO CADASTRADO\n\n");
                    console.log("Digite o número do produto: ")
                    numero = readlinesync.questionInt("");

                    let produto = produtos.buscarnoArray(numero);

                    if (produto != null)
                    {
                    //     console.log("Digite o número da agência: ");
                    //     agencia = readlinesync.questionInt("");

                    //     console.log("Digite o nome do titular da conta: ");
                    //     titular = readlinesync.question("");

                    // tipo = conta.tipo;

                    // console.log("Digite o saldo da conta (R$): ");
                    // saldo = readlinesync.questionFloat("");

                    // switch (tipo)
                    // {
                    //     case 1:
                    //         console.log("Digite o limite da conta (R$): ");
                    //         limite = readlinesync.questionFloat("");
                    //         contas.atualizar(
                    //             new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                    //         break;
                    // case 2:
                    //         console.log("Digite o dia do aniversário da conta poupança: ");
                    //         aniversario = readlinesync.questionInt("");
                    //         contas.atualizar(
                    //             new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                    //         break; 
                    // }
                }
                else
                {
                    console.log("O produto número: " + numero + " não foi encontrado!");
                }

                keyPress();
                break;
            case 5:
                console.log("\n\nAPAGAR PRODUTO CADASTRADO\n\n");

                    console.log("Digite o número do produto: ");
                    numero = readlinesync.questionInt("");
                    produtos.deletar(numero);

                keyPress();
                break;
            // case 6:
            //     console.log(colors.fg.whitestrong,
            //         "\n\nSaque\n\n", colors.reset);

            //     console.log("Digite o número da conta: ");
            //     numero = readlinesync.questionInt("");

            //     console.log("\nDigite o valor do saque (R$): ");
            //     valor = readlinesync.questionFloat("");

            //     contas.sacar(numero, valor);

            //     keyPress();
            //     break;
            // case 7:
            //     console.log(colors.fg.whitestrong,
            //         "\n\nDepósito\n\n", colors.reset);
                
            //     console.log("Digite o número da conta: ");
            //     numero = readlinesync.questionInt("");

            //     console.log("\nDigite o valor do depósito (R$): ");
            //     valor = readlinesync.questionFloat("");

            //     contas.depositar(numero, valor);

            //     keyPress();
            //     break;
            // case 8:
            //     console.log(colors.fg.whitestrong,
            //         "\n\nTransferência entre Contas\n\n", colors.reset);

            //     console.log("Digite o número da conta de origem: ");
            //     numero = readlinesync.questionInt("");

            //     console.log("Digite o número da conta de destino: ");
            //     numeroDestino = readlinesync.questionInt("");

            //     console.log("\n Digite o valor do depósito (R$): ");
            //     valor = readlinesync.questionFloat("");

            //     contas.transferir(numero, numeroDestino, valor);
                
            //     keyPress();
            //     break;
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

main();