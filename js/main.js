/* ================================================
   CONTROLLER: main.js
   Funções compartilhadas por TODAS as páginas.
   Carregado via <script src="js/main.js">
   ================================================ */

/* ── Abre/fecha menu mobile (hambúrguer) ── */
function toggleMenu() {
    const nav = document.querySelector('header nav');
    if (nav) nav.classList.toggle('aberto');
}

/* ── Marca o link ativo no menu conforme a URL atual ── */
function marcarNavAtivo() {
    // Pega só o nome do arquivo da URL (ex: "sobre.html")
    const pagina = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === pagina) {
            link.classList.add('ativo');
        }
    });
}

/* ── Exibe o toast de sucesso na tela ── */
function mostrarToast(mensagem, callback) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = mensagem;
    toast.style.display = 'block';

    // Esconde depois de 2.8 segundos e executa o callback (ex: redirecionar)
    setTimeout(() => {
        toast.style.display = 'none';
        if (callback) callback();
    }, 2800);
}

/* ── Roda ao carregar qualquer página ── */
document.addEventListener('DOMContentLoaded', marcarNavAtivo);
