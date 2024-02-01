# <img src="./src/assets/icons/favicon.png" height= 25> Imersão Alura - Página Principal do Spotify Web

Projeto desenvolvido durante 5 dias na **Imersão Front-End Alura**. Meu projeto final foi **recriar** a página principal do Spotify Web do **zero**.


# Ferramentas e Tecnologias

![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

# Deploy do Projeto 
Optei por realizar o deploy pelo github pages, o projeto pode ser acessado no link abaixo:

<img align="center" src="./src/assets/icons/favicon.png" height=19/> <code>[Link do projeto](https://lucassilvafls.github.io/Spotify-Alura/) </code>

<a href="https://imgur.com/qHStlBV"><img src="https://i.imgur.com/qHStlBV.mp4" title="source: imgur.com" /></a>

# API Local
Foi criada uma API local de teste em JSON com alguns artistas (contém: nome, gênero musical e cards de imagem). Pode ser vista em operação pela barra de pesquisa.

<code> Confira a API funcionando no gif abaixo </code>

<a href="https://imgur.com/gTVGtPo"><img src="https://i.imgur.com/gTVGtPo.mp4" title="source: imgur.com" /></a>
# Como rodar o projeto

1. Clone este repositório usando `https://github.com/LucasSilvafls/Spotify-Alura.git`
2. Navegue até o diretório clonado usando `cd Spotify-Alura`
3. Inicie o Live Server

## Depêndencias necessárias
```bash
npm install json-server@0.17.4
# Versão necessária json server
```

## API
```bash
json-server --watch api-artists/artists.json
# Iniciando a API local pelo terminal
```
# Próximos passos
O projeto ainda está muito simples utilizando somente HTML, CSS E JAVASCRIPT então algumas metas daqui pra frente:
1. **Novas Tecnologias:** Portar o projeto para Angular e usar componentes/componentização
2. **Renovar Interface:** Troca de tema para roxo; Funcionalide Dark/Light; Atualização nos cards e botões com animações
3. **Responsividade funcional:** Desktop, Mobile, Tablet
4. **Consumir API:** Tornar a pesquisa mais completa com mais artistas, playlists, gêneros e cards, consumindo API's do próprio Spotify