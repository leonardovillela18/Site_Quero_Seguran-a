# Quero Segurança — publicação no Streamlit

O site continua sendo desenvolvido em React e Vite. O arquivo `_app.py` carrega no Streamlit a versão compilada em `static/site`, que deve ser enviada ao GitHub junto com os demais arquivos do projeto.

## Publicar

1. Envie este projeto completo para um repositório no GitHub, incluindo `_app.py`, `requirements.txt`, `.streamlit/config.toml`, `static/site` e `public/images/logo_fundo.png`.
2. No [Streamlit Community Cloud](https://share.streamlit.io/), crie um aplicativo, escolha o repositório e a branch e informe `_app.py` como arquivo principal.
3. Inicie a publicação. O Streamlit instala as dependências de `requirements.txt`; não é necessário instalar Node.js no servidor.

## Atualizar o site

Após alterar o código React, execute `npm install` se necessário e depois `npm run build:streamlit`. Envie ao GitHub tanto as alterações no código quanto o conteúdo atualizado de `static/site`. Sem essa compilação, a versão exibida no Streamlit não será atualizada.

Para testar localmente a versão Streamlit, instale as dependências com `pip install -r requirements.txt` e execute `streamlit run _app.py`. O desenvolvimento React continua disponível com `npm run dev`.
