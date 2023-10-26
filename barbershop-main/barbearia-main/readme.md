# Site institucional one-page | Barbearia

Um projeto para simular um site institucional de uma barbearia que permite fazer um agendamento simples via WhatsApp.

## ✅ Status

Finalizado.

## 📷 Screenshot

![Captura de tela do projeto](https://user-images.githubusercontent.com/72027449/154543031-54e563a4-6aad-4dca-a560-5c7dc6be8d9d.png)

## 🚀 Acesse o projeto

* [Design no figma](https://www.figma.com/file/daY57m9WgOrSmT3Pcwndi1/portfolio-barbershop?node-id=1%3A2)
* [Link para o projeto](https://leo-henrique.github.io/barbearia/)

## 💻 Tecnologias utilizadas

* HTML
* CSS / SASS
* JavaScript

## 📋 Detalhes sobre o desenvolvimento

### CSS / SASS

O desenvolvimento do CSS foi feito com SASS na sua principal extensão .scss. Os arquivos foram compilados utilizando o [Scout-App](https://scout-app.io/).


#### Bibliotecas utilizadas:

* [normalize](https://github.com/necolas/normalize.css): para renderizar os elementos HTML de forma mais consistente entre os navegadores;
* [meyerweb reset](https://meyerweb.com/eric/tools/css/reset/): para resetar as principais formatações padrões dos elementos HTML;
* [RFS](https://github.com/twbs/rfs): para que seja feita de forma automática o redimensionamento de todo font-size do site de acordo com a largura da janela de exibição do usuário.

#### SASS

O objetivo de usar o SASS tinha como principal foco fazer proveito dos conceitos mais básicos e também benéficos da linguagem, como:

* `@import`
* variáveis
* mixins
* nesting

Com o `@import` foi possível a separação em vários arquivos no ambiente de desenvolvimento, ajudando na organização e manutenção do código. Todo valor referente a design / estilo do projeto – como cores ou escala tipográfica por exemplo – estão armazenados em variáveis, garantindo a consistência do design e facilitando qualquer futura alteração referente ao mesmo.

#### CSS - estrutura

A página contém uma forma bem comum de apresentar as informações, com texto / informações de um lado e imagem do outro, que pode ser estruturado de forma simples com o **flexbox layout**, utilizando poucas propriedades no flex container. Em outras partes presentes na página foram mais simples de posicionar utilizando propriedades do **grid layout**.

Uma característica bem peculiar do layout são alguns fundos pretos que estão posicionados em baixo de imagens contendo alguns detalhes bem específicos, um desafio interessante de posicionamento que pode ser resolvido com as propriedades de `position`.

#### CSS - responsivo

A parte responsiva do projeto foi feita utilizando como referência os [breakpoints padrão do Bootstrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/#max-width), que são breakpoints pensados para cada dispositivo e altera a largura do container principal de acordo o breakpoint em questão.

Como o layout foi desenvolvido para desktop, os breakpoints se encontram em `max-width` e em geral é apenas diminuído os espaçamentos e colocado todo o layout em apenas uma coluna quando fosse necessário. A biblioteca RFS mencionada anteriormente poupou bastante tempo diminuindo automaticamente os tamanhos de fonte de todo o site.

### JavaScript

Apesar do projeto ser simples e com poucas interações, ainda sim está presente algumas funcionalidades muito comuns de JavaScript.

#### Bibliotecas utilizadas:

* [Glider.js](https://github.com/NickPiscitelli/Glider.js): um carrossel simples e leve utilizado para a simulação dos depoimentos dos clientes.
* [SimpleAnime](https://github.com/origamid/simple-anime): uma biblioteca simples para animações de entrada no site. Uma característica bem interessante é que os elementos não serão animados caso o usuário entre no site e rapidamente vá pra outra aba, garantindo que o usuário veja a animação.

#### Funcionalidades e interações

Muito comum em muitos sites, algumas das principais funcionalidades presentes na página são:

* Menu mobile
* Menu dropdown
* Janela modal
* Animação ao scroll

A maioria das funcionalidades citadas consistem apenas em exibir um elemento que por padrão está oculto e oculta-lo caso este esteja aberto. Abaixo, confira algumas características que foram consideradas na codificação dessas interações.

##### Animações

Para que os elementos que estão ocultos não sejam exibidos de uma forma "seca" – apenas alterando `display: none` para `display: block` e vice-versa –, uma animação simples e com transição rápida sempre é feita ao exibi-los e ao oculta-los.

Para que essas animações sempre sejam visíveis e não estraga-las caso o usuário solicite que o elemento desejado seja exibido ou ocultado muito rapidamente, o usuário só pode abrir ou fechar os elementos após a animação em questão ter ocorrido.

##### Experiência do usuário

Para garantir uma boa experiência do usuário, bastante opções para que o elemento agora aberto seja fechado são acrescentadas, como apertar a tecla ESC ou clicar fora do elemento aberto, além do próprio botão de cada funcionalidade que já faz o elemento em questão abrir / fechar.

##### Acessibilidade

Visando a acessibilidade, alguns atributos ARIA são modificados se o elemento estiver ou não aberto. Outros são removidos e outros acrescentados dependendo da necessidade.

##### Capacidade de novos conteúdos com a mesma funcionalidade

Sempre há a possibilidade de haver mais do que um menu dropdown, ou mais do que uma janela modal, por exemplo, na mesma página. Por isso, posso acrescentar quantos menus dropdowns for necessário em meu HTML, ou outras janelas modais, sem afetar as que já existem e sem ter que escrever outro script.

#### Agendamento

O agendamento presente no site usa o link do WhatsApp que pode ter o URL modificado para acrescentar o número desejado e uma mensagem padrão antes de entrar em contato.

Após o usuário ter clicado para abrir o menu suspenso e selecionado uma opção para o agendamento, o texto da opção selecionada é capturado e acrescentado no `href` do botão de enviar a mensagem, contendo juntamente a URL do WhatsApp, com uma mensagem padrão.

Para indicar a opção que foi selecionada pelo usuário, o texto da opção que ele clicou é colocada também no próprio botão do menu dropdown com uma estilização diferente, além da própria opção ficar marcada quando ele abrir o menu suspenso novamente.
