import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = [
    {
     id: 1,
     name: "Dia 1",
     description: "É muito bom estar começando esse desafio contigo! Hoje, você vai criar a estrutura base do projeto. Para o projeto base, você deverá adicionar o Material Design para criar os componentes e implementar o esquema de rotas. O Material Design é uma biblioteca de componentes de interface prontos para serem usados especificamente em aplicações Angular. Essa biblioteca traz recursos como ícones, cards, esquema de grid, entre outros, que flexibilizam a construção de aplicações. Tudo isso também é mantido pelo Google, assim como o Angular. Então, para hoje, seu objetivo é construir o projeto base e adicionar o Material Design. Em seguida, criar os componentes das páginas de Home, Filmes e Nave, e aplicar o esquema de rotas para redirecionar para cada um desses componentes.Bora lá?" 
    },
    {
     id: 2,
     name: "Dia 2",
     description: "Hoje é o segundo dia do desafio #7DaysOfCode com Angular. Vamos nessa? No primeiro dia, você criou a estrutura base do projeto, adicionou o Material Design, criou os componentes Home, Filmes e Naves, e fez o esquema de roteamento para navegar entre esses componentes. Agora, você vai trabalhar na construção de uma lista para exibir os filmes da franquia Star Wars, mas de forma estática, sem usar a API. Para isso, estou disponibilizando um arquivo JSON contendo os dados dos filmes. Para esse desafio, você terá que capturar as informações desse arquivo JSON. Esse processo é bem semelhante ao que é feito ao interagir com uma API, utilizando o HttpClient. Em geral, o uso de informações estáticas para a criação do layout é comum, pois agiliza o processo enquanto outra parte da equipe trabalha na construção da base de dados. Para exibir os dados, você pode utilizar o componente de Tabela (Table) do Material Design ou continuar usando as diretivas estruturais e interpolação. Caso escolha o Material Design, siga as instruções na documentação (disponibilizada na seção Extra), pois existem alguns recursos na biblioteca para tratar informações em tabela.Para recapitular, as diretivas estruturais são aquelas que modificam o layout, ou seja, adicionam ou removem elementos no DOM. Alguns exemplos são NgIf e NgFor.E aí, bora lá?" 
    },
    {
     id: 3,
     name: "Dia 3",
     description: "No segundo dia, seu desafio foi exibir os dados dos filmes em uma tabela, mas esses dados ainda não estão sendo consumidos da API. Que tal se esse fosse o próximo desafio? Hoje, no terceiro dia, seu objetivo será buscar os filmes na API, substituindo a busca no arquivo JSON por uma requisição na API. O link raiz da API é 'https://swapi.dev/api/' e, para acessar a parte de filmes, basta adicionar  “/films”. Para resolver esse desafio, você terá que lidar com Serviços. O uso de serviços melhora a organização do código, permite que o código seja reutilizado, facilita a manutenção e separa as preocupações, resultando em uma aplicação mais escalável e robusta. Outro detalhe com o qual você terá que se atentar é a tipagem do retorno da requisição. Para isso, você terá que usar as Interfaces. As interfaces são usadas para definir a estrutura dos dados de resposta, garantindo que o trabalho com os dados aconteça de forma consistente e previsível. Bora codar!" 
    },
    {
     id: 4,
     name: "Dia 4",
     description: "O desafio anterior era para pegar os dados dos filmes direto da API. Nesse processo você lidou com o HttpClient, com Services e Injeção de Dependências. No desafio de hoje, você irá criar um formulário onde realizará a busca pelo título do filme. Segundo a documentação da SWAPI, a API possui um recurso de busca que filtra o conjunto de informações. Para isso, a URL recebe o parâmetro `search` (mais informações na seção Extra). Para concluir esse desafio, você terá que trabalhar com o FormsModule. Este módulo fornece provedores e diretivas necessárias para trabalhar com formulários orientados a templates, o que será mais do que suficiente para resolver essa busca. E aí, bora codar?" 
    },
    {
     id: 5,
     name: "Dia 5",
     description: "No desafio anterior, o objetivo era que você criasse um formulário e aplicasse o recurso de busca de filmes. Basicamente, aplicar o recurso de busca da API utilizando um formulário para pegar o texto do usuário. O desafio de hoje será bem semelhante ao segundo desafio, onde você construiu uma tabela para exibir os filmes, porém, agora você fará o mesmo para exibir as naves estelares, e dessa vez usando a API direto, sem ter que lidar com dados estáticos. Então, para o desafio, construa uma tabela para exibir os dados das naves e, em seguida, crie o método de busca das naves no Service da aplicação. Seus conhecimentos sobre HttpClient, com Services e Injeção de Dependências serão colocados em prática novamente. O link da API para realizar a busca das naves é simples: basta colocar /starships em vez de /films. Para que o usuário não fique achando que a aplicação parou, aplique uma notificação de carregamento nessa página também." 
    },
    {
      id: 6,
      name: "Dia 6",
      description: "Anteriormente, você criou a tabela de naves, capturou os dados vindos da API e os exibiu.Iniciando o dia 6, antes de tudo, quero que você crie uma propriedade totalDeNaves no componente Naves e atribua a ela o valor da propriedade count, uma das propriedades presentes na resposta da requisição.Feito isso, verifique o valor dessa propriedade. É possível que o valor seja igual a 36 (ou algo assim), mas que na tela só apareçam 10 itens. Você pode verificar isso com o código abaixo.typescrip obterNaves() { this.exibindoSpinner = true; this.starWarsService.obterNaves().subscribe( resultado => { const totalItemPorPagina = resultado.results.length; console.log(totalItemPorPagina); } ) Isso acontece porque a API retorna apenas 10 naves por página, sendo necessário fazer uma nova requisição para obter os dados das outras páginas. Vamos fazer isso então Para isso, você terá que realizar uma alteração na requisição para adicionar um parâmetro page, com o número da página desejada O link é: https://swapi.dev/api/starships/?page= A requisição deve receber a página de forma dinâmica, ou seja, por meio de um evento no template. Para isso, utilize o Paginator do Material Design (link na seção Extra) Bora lá?" 
    },
    {
     id: 7,
     name: "Dia 7",
     description: "Anteriormente, você criou a paginação na tabela de naves utilizando o componente para tal do Material Design e fazendo a requisição de acordo com a página solicitada. Isso foi necessário porque a API só apresenta 10 itens por página. Que tal, como último desafio, mostrar mais detalhes sobre as naves? Vamos lá Para este desafio, você terá que exibir mais informações sobre um item da tabela. Para isso, por meio do evento de clique em uma linha da tabela, você irá capturar as informações dessa nave e armazenar os dados. Com isso você terá todas as informações do item, já que na tabela só são mostradas 4 informações. Em seguida, procure a melhor forma de exibir mais dados sobre a nave selecionada Para este desafio, você terá que usar o Event Binding, onde você realiza a chamada de um método e realiza alguma tarefa. Outro recurso que você usará será a diretiva NgFor, que permite percorrer um iterável e exibir as suas informações no template Bora pra esse último dia?" 
    }
  ]
}
