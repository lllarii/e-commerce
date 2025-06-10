import { Produtos } from "../model/Produtos";

export interface ProdutosRepository
{
	// CRUD da Conta
	procurarPorNumero(numero: number): void;
	listarTodos(): void;
	cadastrar(conta: Produtos): void;
	atualizar(conta: Produtos): void;
	deletar(numero: number): void;
	
	// Métodos E-commerce
	// comprar(numero: number, valor: number): void;
	// favoritar(numero: number, valor: number): void;	
}