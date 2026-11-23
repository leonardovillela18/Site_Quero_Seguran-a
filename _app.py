"""Entrada do Streamlit Community Cloud para o site React compilado."""

from pathlib import Path

import streamlit as st

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "static" / "site" / "index.html"

st.set_page_config(
    page_title="Quero Segurança | Proteção inteligente",
    page_icon=str(ROOT / "public" / "images" / "logo_fundo.png"),
    layout="wide",
    initial_sidebar_state="collapsed",
)

if not SITE.is_file():
    st.error("A versão compilada do site não foi encontrada em static/site. Execute npm run build:streamlit antes de enviar o projeto ao GitHub.")
    st.stop()

st.html("""
<style>
  [data-testid="stHeader"], [data-testid="stToolbar"], [data-testid="stDecoration"] {display:none;}
  [data-testid="stAppViewBlockContainer"] {padding:0;max-width:none;}
  [data-testid="stMainBlockContainer"] {padding:0;max-width:none;}
  iframe[title="Site Quero Segurança"] {width:100%;height:100vh;display:block;border:0;}
  footer {visibility:hidden;}
</style>
""")
st.iframe("/app/static/site/index.html", height=800, alt="Site Quero Segurança")
