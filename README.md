### 🛒 E-commerce - Console App (SOM.COM)

🎧 Sistema de gerenciamento de e-commerce via terminal, com foco em produtos eletrônicos de áudio como **fones de ouvido** e **caixas de som**. Ideal para praticar **POO (Programação Orientada a Objetos)**, arquitetura em camadas (MVC) e menus interativos com validações inteligentes.

---

#### 💡 Funcionalidades principais:

- 📋 **Menu Interativo via Terminal**  
  Acesso completo às operações de:  
  `Cadastrar`, `Consultar`, `Buscar`, `Atualizar`, `Excluir`, `Comprar`, `Favoritar` e `Ver favoritos`.

- ✅ **Cadastro Inteligente com Validações**  
  Validações de texto com tratamento de erros para garantir entrada mínima (ex: nome com +4 caracteres).

- 🏷️ **Gestão de Estoque Detalhada**  
  Registro de:
  - Preço, cor, estoque
  - Categoria e tipo específico:
    - 🎧 Fones: Auricular, Intra, On-ear, Over-ear  
    - 🔊 Caixas de som: Pequena, Média, Grande  
  - Atributos especiais como *com fio* e *estojo incluso*

- 🛍️ **Simulação Completa de Compra**
  - Escolha de método de pagamento: Pix, Cartão ou Boleto  
  - Inclusão de desconto e frete  
  - Resumo final da compra formatado em R$

- ⭐ **Favoritos**
  - Marcar produtos e visualizar separadamente sua lista de preferidos.

- 🧠 **POO Aplicada**
  - Uso de herança com classes `ProdutosFones` e `ProdutosCaixas`  
  - Lógica centralizada em um `ProdutosController`

- 🧱 **Arquitetura MVC (Model-View-Controller)**  
  O projeto segue a arquitetura **MVC**, promovendo uma separação clara entre responsabilidades.  
  - **Model**: Entidades como `ProdutosFones` e `ProdutosCaixas`  
  - **Controller**: Regras de negócio centralizadas no `ProdutosController`  
  - **View**: Interface simulada com menus interativos no terminal  
  Essa estrutura facilita a organização do código, manutenções futuras e expansão de funcionalidades.

- 🧩 **Tratativas de Erro Inteligentes**
  - Exceções personalizadas com `try/catch` garantem que campos como nome e descrição sejam inseridos corretamente.  
  - Em caso de erro contínuo, a aplicação reinicia a ação com mensagens claras, reforçando boas práticas de entrada de dados e controle de fluxo.

---

🔗 [Ver repositório no GitHub](https://github.com/lllarii/e-commerce)
