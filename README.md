<div align="center">

# 💧 Caminho da Água

### Plataforma de doações para acesso à água potável e saneamento básico no Brasil


> Projeto Interdisciplinar — Fatec Matão "Luiz Marchesan"  
> Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma

</div>

---

## 📌 O que é esse projeto?

O **Caminho da Água** é o nosso **Projeto Interdisciplinar (PI)**, um trabalho obrigatório do curso que une várias matérias em um só projeto real. Por ser interdisciplinar, ele substitui o TCC — ou seja, vale como o nosso trabalho de conclusão do semestre!

O projeto é um **site de doações e apoio financeiro** voltado para comunidades que não têm acesso à água potável ou saneamento básico. Criamos uma plataforma onde qualquer pessoa pode ajudar — ou pedir ajuda.

---

## 🌍 Por que esse tema?

Foram sorteadas **Objetivos de Desenvolvimento Sustentável (ODS)** da ONU:

| ODS | Tema | Nossa relação |
|-----|------|---------------|
| 🔵 **ODS 6** | Água Potável e Saneamento | Foco principal do projeto |
| 🟠 **ODS 10** | Redução das Desigualdades | Foco secundário, pois o problema afeta comunidades mais vulneráveis |

**O problema é real:** Segundo dados do IBGE, mais de **33 milhões de brasileiros** ainda não têm acesso à água tratada e **90 milhões** vivem sem saneamento básico adequado só no Brasil. Criamos o Caminho da Água para conectar quem quer ajudar com quem precisa de ajuda.

---

## ⚙️ Como o site funciona?

A plataforma funciona como uma ponte entre doadores e comunidades carentes:

- 👤 **Pessoa para Pessoa (C2C):** cidadãos comuns podem doar diretamente para projetos de outras pessoas.
- 🏢 **Empresa para Comunidade (B2C):** empresas podem apoiar projetos de comunidades necessitadas.
- 🤝 **Doação para ONGs:** usuários também podem direcionar doações para ONGs e instituições que já trabalham com acesso à água.

### Fluxo principal do usuário:
```
Entra no site → Vê as campanhas ativas → Escolhe um projeto
       ↓
   Faz uma doação (Débito / Crédito / Pix)
       ↓
   Recebe confirmação e o projeto é atualizado
```

---

## 🖥️ Páginas do Site

| Página | Descrição |
|--------|-----------|
| 🏠 `index.html` | Página inicial com banner, estatísticas e campanhas ativas |
| 🔑 `login.html` | Tela de login (e-mail, senha e redes sociais) |
| 📝 `cadastro.html` | Cadastro para Pessoa Física (CPF) ou Jurídica (CNPJ) |
| 💙 `doacao.html` | Tela de doação com seleção de campanha e método de pagamento |
| 🌱 `criar-projeto.html` | Formulário para comunidades criarem pedidos de apoio |
| ℹ️ `sobre.html` | História do projeto, missão e equipe |
| ✉️ `contato.html` | Formulário de contato e informações da equipe |

---

## 🗂️ Estrutura de Arquivos

```
CaminhoDaAgua/
│
├── 📄 index.html              ← Página inicial
│
├── 📁 pages/                  ← Páginas internas do site
│   ├── login.html
│   ├── cadastro.html
│   ├── sobre.html
│   ├── contato.html
│   ├── doacao.html
│   └── criar-projeto.html
│
├── 📁 css/                    ← Estilos separados por função
│   ├── base.css               ← Cores, reset e botões globais
│   ├── layout.css             ← Cabeçalho, rodapé e menu mobile
│   ├── pages.css              ← Seções de conteúdo
│   └── forms.css              ← Formulários e tela de doação
│
├── 📁 js/                     ← Lógica e interatividade
│   ├── main.js                ← Funções globais (menu, toast)
│   └── forms.js               ← Validação e máscaras de formulário
│
├── 📁 img/                    ← Imagens e logos
│
└── 📋 README.md               ← Este arquivo
```

---

## 🎨 Identidade Visual


| Cor | Hex | Uso |
|-----|-----|-----|
|  Azul Claro | `#00ABFA` | Botão principal, destaques |
|  Azul Suave | `#80C4FF` | Títulos e logo |
|  Azul Escuro | `#4370D1` | Bordas e botão do menu |
|  Fundo Geral | `#1e1f27` | Background da página |
|  Fundo Card | `#313550` | Cards, cabeçalho e rodapé |

---


## 👥 Equipe

| Integrante | |
|---|---|
| 🧛🏻 Eduardo Alves |
| 🕵🏽‍♂️ Ygor Gabriel 
| 🧙🏻 Gabriel Alves 
| 🧟 Igor Torrichelli 
| 🥷🏽 Thiago Tumang 

---

## 🏫 Informações Acadêmicas

- **Instituição:** Centro Paula Souza — Fatec Matão "Luiz Marchesan"
- **Curso:** Tecnologia em Desenvolvimento de Software Multiplataforma
- **Tipo de trabalho:** Projeto Interdisciplinar (PI) — 1º Semestre de 2026

---

