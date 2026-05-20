/* ================================================
   CONTROLLER: forms.js
   Validação, máscaras e lógica de formulários.
   Carregado apenas nas páginas que têm formulário.
   ================================================ */

/* ════════════════════════════════════════
   MÁSCARAS DE INPUT
   (formatam o texto enquanto o usuário digita)
   ════════════════════════════════════════ */

/* CPF → 000.000.000-00 */
function formatarCPF(input) {
    let v = input.value.replace(/\D/g, '');           // Remove tudo que não é número
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = v;
}

/* CNPJ → 00.000.000/0000-00 */
function formatarCNPJ(input) {
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/, '$1.$2');
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
    v = v.replace(/(\d{4})(\d)/, '$1-$2');
    input.value = v;
}

/* Telefone → (00) 00000-0000 */
function formatarTelefone(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        v = v.replace(/(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
    }
    input.value = v;
}

/* Número de cartão → 0000 0000 0000 0000 */
function formatarCartao(input) {
    let v = input.value.replace(/\D/g, '');
    v = v.match(/.{1,4}/g)?.join(' ') || v;
    input.value = v;
}

/* ════════════════════════════════════════
   VALIDAÇÕES
   ════════════════════════════════════════ */

/* Verifica se o e-mail tem formato válido */
function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Mostra ou esconde erro de um campo pelo ID */
function definirErro(campoId, mostrar, mensagem) {
    const input = document.getElementById(campoId);
    const msg   = document.getElementById('erro-' + campoId);
    if (!input) return;

    input.classList.toggle('invalido', mostrar);   // Borda vermelha
    if (msg) {
        if (mensagem) msg.textContent = mensagem;
        msg.classList.toggle('visivel', mostrar);  // Exibe/esconde texto
    }
}

/* ════════════════════════════════════════
   LOGIN
   ════════════════════════════════════════ */
function validarLogin() {
    const email = document.getElementById('login-email')?.value.trim();
    const senha  = document.getElementById('login-senha')?.value;
    let ok = true;

    if (!emailValido(email)) { definirErro('login-email', true,  'E-mail inválido'); ok = false; }
    else                       definirErro('login-email', false);

    if (!senha || senha.length < 6) { definirErro('login-senha', true,  'Mínimo 6 caracteres'); ok = false; }
    else                              definirErro('login-senha', false);

    if (ok) mostrarToast('✅ Login realizado!', () => { window.location.href = 'index.html'; });
}

/* ════════════════════════════════════════
   CADASTRO
   ════════════════════════════════════════ */
let tipoCadastro = 'pf';   // 'pf' = Pessoa Física | 'pj' = Pessoa Jurídica

/* Troca o formulário conforme o tipo selecionado */
function trocarTipoCadastro() {
    tipoCadastro = document.getElementById('tipo-select')?.value || 'pf';

    document.getElementById('form-pf').style.display = tipoCadastro === 'pf' ? 'block' : 'none';
    document.getElementById('form-pj').style.display = tipoCadastro === 'pj' ? 'block' : 'none';
}

/* Valida e envia o cadastro */
function validarCadastro() {
    let ok = true;

    if (tipoCadastro === 'pf') {
        // Lista de campos a validar: { id, mensagem de erro, função de teste }
        const campos = [
            { id: 'pf-nome',       msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-sobrenome',  msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-cpf',        msg: 'CPF inválido',        teste: v => v.length >= 14 },
            { id: 'pf-celular',    msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-nascimento', msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-estado',     msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-cidade',     msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pf-email',      msg: 'E-mail inválido',     teste: v => emailValido(v) },
            { id: 'pf-senha',      msg: 'Mínimo 6 caracteres', teste: v => v.length >= 6 },
        ];
        campos.forEach(c => {
            const el = document.getElementById(c.id);
            if (!el) return;
            const valido = c.teste(el.value.trim());
            definirErro(c.id, !valido, c.msg);
            if (!valido) ok = false;
        });

    } else {
        const campos = [
            { id: 'pj-nome',        msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pj-cnpj',        msg: 'CNPJ inválido',       teste: v => v.length >= 18 },
            { id: 'pj-responsavel', msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pj-estado',      msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pj-cidade',      msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pj-telefone',    msg: 'Campo obrigatório',   teste: v => v !== '' },
            { id: 'pj-email',       msg: 'E-mail inválido',     teste: v => emailValido(v) },
            { id: 'pj-senha',       msg: 'Mínimo 6 caracteres', teste: v => v.length >= 6 },
        ];
        campos.forEach(c => {
            const el = document.getElementById(c.id);
            if (!el) return;
            const valido = c.teste(el.value.trim());
            definirErro(c.id, !valido, c.msg);
            if (!valido) ok = false;
        });
    }

    if (ok) mostrarToast('✅ Cadastro realizado!', () => { window.location.href = 'login.html'; });
}

/* ════════════════════════════════════════
   DOAÇÃO
   ════════════════════════════════════════ */
let valorDoacao = 50;   // Valor padrão inicial

/* Seleciona uma campanha na lista lateral */
function selecionarCampanha(el, valor) {
    document.querySelectorAll('.doacao-card-item').forEach(c => c.classList.remove('ativo'));
    el.classList.add('ativo');
    valorDoacao = valor;
    document.getElementById('valor-personalizado').value = '';
    atualizarValorExibido();
}

/* Atualiza o valor pelo campo livre */
function atualizarValor(v) {
    const num = parseFloat(v);
    if (num > 0) { valorDoacao = num; atualizarValorExibido(); }
}

/* Formata e exibe o valor nos três painéis (débito, crédito, pix) */
function atualizarValorExibido() {
    const fmt = 'R$ ' + valorDoacao.toFixed(2).replace('.', ',');
    ['valor-debito', 'valor-credito', 'valor-pix'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = fmt;
    });
}

/* Troca a aba de método de pagamento */
function mostrarMetodo(metodo, btn) {
    // Esconde todos os painéis
    ['painel-debito', 'painel-credito', 'painel-pix'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // Mostra só o painel escolhido
    const painel = document.getElementById('painel-' + metodo);
    if (painel) painel.style.display = 'block';

    // Atualiza o botão ativo
    document.querySelectorAll('.metodo-btn').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
}

/* Copia chave Pix para a área de transferência */
function copiarPix() {
    navigator.clipboard.writeText('caminhodaagua@gmail.com')
        .then(() => mostrarToast('📋 Código Pix copiado!'))
        .catch(() => alert('Copie manualmente: caminhodaagua@gmail.com'));
}

/* Finaliza o pagamento */
function finalizarDoacao() {
    mostrarToast('💙 Doação realizada! Obrigado!', () => { window.location.href = 'index.html'; });
}

/* ════════════════════════════════════════
   CRIAR PROJETO
   ════════════════════════════════════════ */

/* Preenche o título com a sugestão clicada */
function sugerirTitulo(texto) {
    const input = document.getElementById('proj-titulo');
    if (!input) return;
    input.value = texto;
    input.focus();
}

/* Valida e envia o formulário de projeto */
function validarProjeto() {
    const titulo    = document.getElementById('proj-titulo').value.trim();
    const descricao = document.getElementById('proj-descricao').value.trim();
    const meta      = parseFloat(document.getElementById('proj-meta').value);
    const prazo     = document.getElementById('proj-prazo').value;
    const contato   = document.getElementById('proj-contato').value.trim();

    definirErro('proj-titulo',    titulo === '',          'Campo obrigatório');
    definirErro('proj-descricao', descricao === '',       'Campo obrigatório');
    definirErro('proj-meta',      !meta || meta < 100,   'Valor mínimo: R$ 100');
    definirErro('proj-prazo',     prazo === '',           'Campo obrigatório');
    definirErro('proj-contato',   !emailValido(contato), 'E-mail inválido');

    const ok = titulo && descricao && meta && meta >= 100 && prazo && emailValido(contato);
    if (ok) {
        mostrarToast('✅ Projeto enviado! Em breve será revisado.',
            () => { window.location.href = '../index.html'; });
    }
}
