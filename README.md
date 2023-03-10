# jQuery3
![NPM](https://img.shields.io/npm/l/react)
# Introdução

Em 2006, [John Resig](https://en.wikipedia.org/wiki/John_Resig) era um desenvolvedor Web que trabalhava em seus próprios projetos. Ele estava frustrado com a dificuldade de escrever códigos em JavaScript que funcionasse em vários navegadores, então decidiu escrever sua própria [biblioteca](https://pt.wikipedia.org/wiki/Biblioteca_(computa%C3%A7%C3%A3o)) JavaScript para resolver os seus problemas. Eis que surgi o jQuery. Em 16 de janeiro de 2006, John Resig deu uma palestra sobre sua nova biblioteca no [BarCamp](https://pt.wikipedia.org/wiki/BarCamp) em Nova York, para um pequeno grupo de desenvolvedores Web, e publicou isso em seu blog.

O jQuery é então uma biblioteca de funções em JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do usuário (denominado [client-side](https://pt.wikipedia.org/wiki/Linguagem_client-side)). Usada por cerca de 77% dos 10 mil sites mais visitados do mundo, jQuery é a mais popular das bibliotecas JavaScript. O jQuery é uma biblioteca de código aberto (ou [open source](https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto)) e possui licença dual, fazendo uso da Licença MIT ou da GNU General Public License v2. 

A sintaxe do jQuery foi desenvolvida para simplificar a navegação em documentos HTML, a seleção de elementos DOM, criar animações, manipular eventos, desenvolver aplicações AJAX e criação de plugins sobre ela. Permitindo aos desenvolvedores criarem camadas de abstração para interações de baixo nível de modo simplificado em aplicações Web de grande complexidade.

O jQuery é leve, seu tamanho é em torno de 30kb, extensível, oferece suporte a plug-ins e conta ainda com uma grande equipe de desenvolvedores que vem diariamente adicionando novos recursos e funções a está biblioteca, nos disponibilizando uma grande quantidade de controles para interface.

**Podemos utilizar a jQuery para**:

- Adicionarmos efeitos visuais e animações;
- acessarmos e manipularmos o DOM;
- carregarmos componentes Ajax;
- provermos interatividade;
- fazer alteração de conteúdo;
- simplificarmos tarefas JavaScript.

**Suporte ao jQuery**

O jQuery foi desenvolvido para ser uma biblioteca com suporte a qualquer navegador Web. Ele facilita a nós desenvolvedores a difícil tarefa de desenvolvermos aplicações em JavaScript, tendo que atingir a enorme quantidade de navegadores em que nossa programação poderá ser executada. Como sabemos, cada navegador possui seu próprio conjunto de características de implementação que pode dificultar mais ainda, de acordo com a variação de plataforma e sistema operacional onde esteja executando. Já com o jQuery, nossa programação é única e transparente.

Com o jQuery possuímos suporte também ao CSS3, onde podemos utilizar seletores CSS3, mesmo que o navegador não tenha suporte a uma determinada folha de estilo. Isso é possível porque o próprio jQuery implementa os seletores CSS3, o que faz com que ele seja independente do navegador em que estiver sendo executado.

**Construtor jQuery**

Com o jQuery temos que utilizar a função $() para encontrarmos um elemento HTML dentro da aplicação e utilizarmos as funções da biblioteca. Essa função é tecnicamente conhecida como **construtor** ou função construtora e ela estará presente em todas as aplicações que utilizarmos o jQuery.

É denominada desse modo para ser fácil de decorar e o fato de se chamar $ evita a possibilidade de ocorrer conflitos com outras funções da biblioteca do usuário. Ocasionalmente podemos vir a utilizar alguma outra biblioteca que também tenha como uso uma função chamada $. Caso isso aconteça, podemos usar como alternativa a função jQuery().

O construtor faz uso do seguinte parâmetro, onde o alvo é um seletor CSS para tag, id ou classe. Vejamos alguns exemplos de sua utilização.
```javascript
$('h1')
$('p')
$('#conteudo')
$('.teste')
```
Muitos desenvolvedores Web amaram a simplicidade e o poder do jQuery, e a biblioteca de John logo ficou popular. Hoje, jQuery é a biblioteca JavaScript mais popular e é mantida pela Fundação jQuery, formada por uma grande equipe de voluntários. 

No vídeo abaixo da Hostinger Brasil, é apresentado um pequeno resumo do que é o jQuery e sua aplicabilidade. 

[![Assista ao vídeo](https://img.youtube.com/vi/AeCczbOctM8/maxresdefault.jpg)](https://www.youtube.com/watch?v=AeCczbOctM8)

## Referências

- Pausa para a história: como John criou o jQuery? Khan Academy, disponível em: [https://pt.khanacademy.org](https://pt.khanacademy.org/computing/computer-programming/html-js-jquery/jquery-dom-access/a/history-of-jquery). Acesso em: 28 de jan. de 2023.
- jQuery Tutorial. Devmedia, disponível em: [https://www.devmedia.com.br](https://www.devmedia.com.br/jquery-tutorial/27299). Acesso em: 28 de jan. de 2023.

## Como executar

Pré-requisitos: 
- Visual Studio Code
- GIT

```bash
# clonar repositório
git clone https://github.com/fbamuniz/class-05-jquery3.git

```

## Bibliografia Básica 
- MEYER, E. S. CSS - técnicas profissionais para um layout moderno. Porto Alegre: Bookman, 2011.
- POWERS, S. Aprendendo JavaScript. São Paulo: Novatec, 2010.
- PETRUCELLI, E. E. HTML5, CSS e JavaScript. Brasília: NT Editora, 2019.
- DUCKETT, J. HTML e CSS: Projete e Construa Websites. Rio de Janeiro: Alta Books. 2016.
- SILVERMAN, R.E. Git: Guia prático. São Paulo: Novatec, 2019.
- GRINBERG, M. Desenvolvimento web com Flask: Desenvolvendo aplicações web com Python. São Paulo: Novatec, 2019.

## Bibliografia Complementar:
- GOMES, A. L. XHTML/CSS: criação de páginas web (Informática). São Paulo: Editora Senac, 2019.
- QUIERELLI, D. A. Criando sites com HTML-CSS-PHP: Construindo um projeto - Iniciante. Joinville: Clube dos Autores, 2012.
- TITTEL, E., NOBLE, J. HTML, XHTML e CSS Para Leigos. Rio de Janeiro: Alta Books, 2014

# Autor

Prof. Frederico Barbosa Muniz<br>
https://linktr.ee/fbamuniz