# 💧 Caminho da Água — Estrutura do Projeto

```text
.
├── index.html              ← Página inicial (home)
│
├── pages/                  ← VIEW: páginas do site
│   ├── login.html          ← Login (único acesso ao cadastro)
│   ├── cadastro.html       ← Cadastro (PF e PJ)
│   ├── sobre.html          ← Visão do produto
│   ├── contato.html        ← Contato
│   ├── doacao.html         ← Fazer doação (débito/crédito/pix)
│   └── criar-projeto.html  ← Criar pedido de doação
│
├── css/                    ← VIEW: estilos separados por função
│   ├── base.css            ← Variáveis de cor, reset, botões globais
│   ├── layout.css          ← Header fixo, footer, menu mobile
│   ├── pages.css           ← Seções de conteúdo (hero, cards, etc.)
│   └── forms.css           ← Formulários (login, cadastro, doação)
│
├── js/                     ← CONTROLLER: lógica em JavaScript
│   ├── main.js             ← Funções globais (menu mobile, toast)
│   └── forms.js            ← Validação, máscaras e lógica de forms
│
└── img/
    ├── noNameLogo.png
    └── pathWater.png


## Como os CSS são importados

Cada página importa só o que precisa:

```html
<!-- Páginas de conteúdo (index, sobre, contato) -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/pages.css">

<!-- Páginas com formulário (login, cadastro, doação) -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/forms.css">
```

---

## Cores do projeto

| Variável         | Hex       | Uso                        |
|------------------|-----------|----------------------------|
| `--azul-escuro`  | `#4370D1` | Bordas, btn-nav            |
| `--azul-medio`   | `#4796D6` | Hover de botões            |
| `--azul-claro`   | `#00ABFA` | Botão primário, destaques  |
| `--azul-suave`   | `#80C4FF` | Títulos, logo              |
| `--fundo-page`   | `#1e1f27` | Fundo geral                |
| `--fundo-card`   | `#313550` | Cards, header, footer      |
