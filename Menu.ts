import readlinesync = require ("readline-sync");

export function main ()
{
let menu, numero: number;


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
                console.log("\n\nCADASTRO DE PRODUTOS\n\n");
                

                keyPress();
                break;
            case 2:
                console.log("\n\nCONSULTA DE PRODUTOS CADASTRADOS\n\n");

                keyPress();
                break;
            case 3:
                console.log("\n\nBUSCAR PRODUTO POR NÚMERO\n\n");

                console.log("Digite o número do produto: ");
                numero = readlinesync.questionInt("");

                keyPress();
                break;
            case 4:
                console.log("\n\nATUALIZAR PRODUTO CADASTRADO\n\n");
                    console.log("Digite o número do produto: ")
                    numero = readlinesync.questionInt("");


                keyPress();
                break;
            case 5:
                console.log("\n\nAPAGAR PRODUTO CADASTRADO\n\n");

                    console.log("Digite o número do produto: ");
                    numero = readlinesync.questionInt("");


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

main();