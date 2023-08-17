/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/

// Importa o arquivo envia-email
const enviarEmail = require('./envia-email.js');
// tentei isso aqui
// import { enviarEmail } from "./envia-email";
// Lista de clientes
let clientes = [
    {email:"ivirsondaltro@gmail.com", marketing:true},
    {email:"brunocabral@live.com", marketing:false},
    {email:"octaviomassaro@hotmail.com", marketing:true},
    {email:"samuelcavalcanti@gmail.com", marketing:false},
    {email:"diegoferreira@live.com", marketing:true},
]

verificarDia(clientes);

// verifica o dia da semana atual
function verificarDia(clientes) {
    let dia = new Date
/* Se o valor de dia.getDay() for igual a 1 significa que é segunda feira, então chama-se a função gerarEmail(),
 caso contrário nada ocorre.*/
    if(dia.getDay() === 1){
        gerarEmail(clientes);
    }
}

function gerarEmail(clientes){

    const assunto = 'Oferta de carros novos';

    const corpo = `
        Estamos animados em compartilhar as últimas atualizações diretamente de nossas lojas:

        Novidades Fresquinhas: Chegaram os novos modelos Land Cruiser e Civic Sport, prontos para conquistar as estradas com estilo.
    
        Favoritos de Hoje: Nossos clientes têm adorado o desempenho do Ford Mustang e a versatilidade do Toyota Corolla. Eles são os líderes de vendas do mês!
    
        Ofertas Imbatíveis: Quer dirigir um Ford Mustang? Aproveite agora com descontos de até 15% e financiamento a partir de R$899/mês.
    
        Não perca a oportunidade de ver essas belezas em ação. Nossos consultores estão prontos para ajudar você a escolher o carro perfeito.
    `;

    let destinatario;

    for(cliente of clientes){
        // se o cliente optou por receber comunicações de marketing, o email será enviado.
        if(cliente.marketing){
            destinatario = cliente.email;
            enviar(destinatario,assunto,corpo);
        }
    }
}

function enviar(destinatario,assunto,corpo) {
    // Envia o email com os dados fornecidos pela função gerarEmail.
    console.log(enviarEmail(destinatario,assunto,corpo))
}