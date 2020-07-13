# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Instalação do Projeto](#3-instalação-do-projeto)
* [4. Implementações Futuras](#4-Implementações-Futuras)
* [5. Autora](#6-Autora)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.


## 2. Resumo do projeto

Este projeto foi desenvolvido por [Karina Vitangelo](https://github.com/karinavit), aluna da 4a Geração da [Laboratoria](https://github.com/Laboratoria)(SAP004).
A proposta é construir um programa que seja executado com [Node.js](https://nodejs.org/pt-br/), onde iremos interagir com sistemas de arquivos e com o ambiente onde é executado o Node (_processo_, _env_,_stdin/stdout/stderr_). Logo, teremos uma ferramenta de linha de comando (CLI) assim como a sua própria biblioteca (library) em JavaScript.

## 3. Instalação do projeto

Atualmente, essa biblioteca apenas identifica os links presentes no documento Markdown. Portanto a instalação deve ser realizada da seguinte forma:

Caso deseje baixar o projeto para sua máquina é possível criar um fork do nosso repositório e depois disso, você deve realizar um "clone" ou "donwload" do **link fornecido pelo seu repositório** para então digitar em seu terminal:

  `git clone <cole seu link após isso>`
  
O repositório será completamente baixado em sua máquina, e caso use o Visual Studio Code, basta entrar na pasta pelo terminal e digitar:

  `code .`

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download, pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

`npm install` 

E aguardar até que o processo tenha sido completo.

A partir daí basta abrir no seu terminal e indicar o arquivo que deve ser passado na linhda de comando do seu terminal:

`md-links <path-to-file> [options]`

Por exemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html algum doc
./some/example.md http://google.com/ Google

## 4. Implementações Futuras

Para versões futuras deseja-se implementar as options descritas no check list abaixo:
* [ ] Poder instalar via `npm install --global <github-user>/md-links`
* [ ] Implementa suporte para diretórios
* [ ] Implementa `options.validate`
* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado
* [ ] Implementar `--validate`
* [ ] Implementar `--stats`
* [ ] Os testes unitários devem cobrir no mínimo 70% dos statements, functions,
  lines e branches.
* [ ] Rodar os testes e linter (`npm test`).

## 5. Autora
Este projeto foi desenvolvido por [Karina Vitangelo](https://github.com/karinavit), aluna da 4a Geração da [Laboratoria](https://github.com/Laboratoria)(SAP004).
