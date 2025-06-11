import { Produtos } from "../model/Produtos";

export interface ProdutosRepository
{
	// CRUD da Conta
	procurarPorNumero(numero: number): void;
	listarTodos(): void;
	cadastrar(produto: Produtos): void;
	atualizar(produto: Produtos): void;
	deletar(numero: number): void;
	
	// Métodos E-commerce
	comprar(numero: number, quantidade: number, desconto: number, frete: number): {nome: string, valor: number};
	favoritar(numero: number): void;	
}