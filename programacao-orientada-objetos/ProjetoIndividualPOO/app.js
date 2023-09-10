class Item {
    #id;
    #nome;
    #preco;
    static #contador = 0;
    constructor(nome, preco) {
        this.#id = Item.#contador++;
        this.#nome = nome;
        this.#preco = preco;
    }

    getId(){
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        this.#nome = novoNome;
    }

    getPreco() {
        return this.#preco;
    }

    setPreco(novoPreco) {
        this.#preco = novoPreco;
    }

    descrever() {
        console.log(`Item ${this.getId()}: ${this.getNome()}, Preço: R$${this.getPreco()}`);
    }
}

class Jogo extends Item {
    #dataLancamento;
    #tipo;

    constructor(nome, preco, dataLancamento, tipo) {
        super(nome, preco);
        this.#dataLancamento = dataLancamento;
        this.#tipo = tipo;
    }

    getJogoId() {
        return super.getId();
    }

    getDataLancamento() {
        return this.#dataLancamento;
    }

    setDataLancamento(novaDataLancamento) {
        this.#dataLancamento = novaDataLancamento;
    }

    getTipo() {
        return this.#tipo;
    }

    setTipo(tipo) {
        this.#tipo = tipo;
    }

    descrever() {
        console.log(`Jogo ${this.getJogoId()}: ${this.getNome()}, Preço: R$${this.getPreco()}, Data de Lançamento: ${this.getDataLancamento()}, Tipo: ${this.getTipo()}`);
    }
}

class GerenciadorJogos {
    static #listaJogos = [];

    constructor(){}

    static init() {
        GerenciadorJogos.adicionarJogo();
        GerenciadorJogos.editarJogo();
    }

    static getListaJogos() {
        return this.#listaJogos;
    }

    static adicionarJogo() {
        const formAdicionar = document.getElementById("formAdicionar");
    
        formAdicionar.addEventListener("submit", (e) => {
            e.preventDefault();
            const addNome = document.getElementById("addNome").value;
            const addPreco = parseFloat(document.getElementById("addPreco").value);
            const addDataLancamento = document.getElementById("addDataLancamento").value;
            const addTipo = document.getElementById("addTipo").value;
    
            if (addNome && !isNaN(addPreco) && addPreco >= 0 && addPreco <= 9999 && addDataLancamento && addTipo) {
                const novoJogo = new Jogo(addNome, addPreco, addDataLancamento, addTipo);
                this.#listaJogos.push(novoJogo);
                this.atualizarTabela();
                novoJogo.descrever();
                this.limparCampos();
                $('#modalAdicionar').modal('hide');
            } else {
                alert("Por favor, preencha todos os campos corretamente. O campo Preço deve ser menor que 9999 e maior ou igual a 0");
            }
        });
    }
    

    static eventoEditar() {
        const editarBtns = document.querySelectorAll(".btn-editar");
        editarBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                this.pegarValoresFormularioEditar(id);
            });
        });
    }

    static pegarValoresFormularioEditar(id) {
        const jogo = this.getListaJogos().find((jogo) => jogo.getJogoId() === id);

        const editId = document.getElementById("editId");
        const editNome = document.getElementById("editNome");
        const editPreco = document.getElementById("editPreco");
        const editDataLancamento = document.getElementById("editDataLancamento");
        const editTipo = document.getElementById("editTipo");

        editId.value = jogo.getJogoId();
        editNome.value = jogo.getNome();
        editPreco.value = jogo.getPreco();
        editDataLancamento.value = jogo.getDataLancamento();
        editTipo.value = jogo.getTipo();
        $('#modalEditar').modal('show');   
    }

    static editarJogo() {
        const formEditar = document.getElementById("formEditar");
    
        formEditar.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = parseInt(document.getElementById("editId").value);
            const editNome = document.getElementById("editNome").value;
            const editPreco = parseFloat(document.getElementById("editPreco").value);
            const editDataLancamento = document.getElementById("editDataLancamento").value;
            const editTipo = document.getElementById("editTipo").value;
    
            if (!editNome && isNaN(editPreco) && addPreco >= 0 && addPreco <= 9999 && !editDataLancamento && !editTipo) {
                alert("Por favor, preencha todos os campos do formulário de edição corretamente. O campo Preço deve ser menor que 9999 e maior ou igual a 0");
                return;
            }
    
            const jogoEditado = this.getListaJogos().find((jogo) => jogo.getJogoId() === editId);
    
            jogoEditado.setNome(editNome);
            jogoEditado.setPreco(editPreco);
            jogoEditado.setDataLancamento(editDataLancamento);
            jogoEditado.setTipo(editTipo);
            this.atualizarTabela();
            $('#modalEditar').modal('hide');
        });
    }    
    
    static eventoExcluir() {
        const excluirBtns = document.querySelectorAll(".btn-excluir");
        excluirBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                this.removerJogo(id);
                this.atualizarTabela();
            });
        });
    }

    static removerJogo(id) {
        this.#listaJogos = this.#listaJogos.filter((jogo) => jogo.getJogoId() !== id);
    }

    static limparCampos() {
        document.getElementById("addNome").value = "";
        document.getElementById("addPreco").value = "";
        document.getElementById("addDataLancamento").value = "";
        document.getElementById("addTipo").value = "";
    }

    static atualizarTabela() {
        const tabelaJogos = document.getElementById("tabelaJogos");
        tabelaJogos.innerHTML = "";

        this.getListaJogos().forEach((jogo) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${jogo.getJogoId()}</td>
            <td>${jogo.getNome()}</td>
            <td>${jogo.getPreco()}</td>
            <td>${jogo.getDataLancamento()}</td>
            <td>${jogo.getTipo()}</td>
            <td>
                <button class="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#modalEditar" data-id="${jogo.getJogoId()}">Editar</button>
                <button class="btn btn-danger btn-sm btn-excluir" data-id="${jogo.getJogoId()}">Excluir</button>
            </td>
        `;
            tabelaJogos.appendChild(tr);
        });

        this.eventoEditar();
        this.eventoExcluir();
    }
}

GerenciadorJogos.init();

GerenciadorJogos.prototype.ContarJogos = function () {
    contagemJogo = GerenciadorJogos.getListaJogos()
    console.log(contagemJogo.length);
}

g = new GerenciadorJogos();
