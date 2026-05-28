# Plano de implementação — Site Ana Fedel

**Fonte:** [website_audit_prompt_ana_fedel.md](website_audit_prompt_ana_fedel.md) (auditoria profissional)

**Entregável no repo:** este documento na raiz do projeto (junto a `index.html`).

**Stack atual:** site estático (`index.html` + [`styles.css`](styles.css)), hospedagem GitHub Pages (`CNAME` → anafedel.com). Sem build step — cada página SEO é um HTML independente com header/rodapé por cópia consistente.

**Última revisão do plano:** maio/2026

---

## Decisões confirmadas

| Decisão | Escolha |
|---|---|
| CTA principal | Google Calendar (`.gcal-schedule-host`) |
| CTA secundário | WhatsApp com mensagem pré-preenchida + botão fixo no mobile |
| Estilo visual | Manter identidade atual (paleta bordeaux/nude, tipografia, composição) |
| Escopo da homepage | `index.html` com melhorias **pontuais** — sem redesign |
| Conteúdo | CRN e local disponíveis; depoimentos e fotos novas depois (placeholder) |

---

## Objetivo

Elevar clareza, conversão e SEO **sem redesign**:

1. Fortalecer promessa e autoridade no topo (hero, CRN, Campinas/online).
2. Melhorar caminho até agendamento e WhatsApp.
3. Aumentar confiança (método, diferenciais, FAQ, prova social).
4. Abrir crescimento orgânico com páginas SEO e página `/links` (Instagram).

---

## Status atual (resumo)

### Já implementado no código

| Item | Arquivo(s) | Status |
|---|---|---|
| Hero com promessa, CRN, CTAs Calendar + WhatsApp | `index.html` | Feito |
| Seção identificação (dor/empatia) | `index.html` | Feito |
| Nav com âncoras (Planos, Método, FAQ) | `index.html` | Feito |
| Especialidades / para quem (grid) | `index.html` | Feito |
| Diferenciais (6 itens) | `index.html` | Feito |
| Planos com taglines, badge Transformar, WhatsApp do plano | `index.html` | Feito |
| Depoimentos (placeholder) | `index.html` | Feito |
| FAQ expandido (10 perguntas) | `index.html` | Feito |
| JSON-LD Dietitian + LocalBusiness + FAQPage | `index.html` | Feito |
| Botão WhatsApp fixo (mobile) | `index.html`, `styles.css` | Feito |
| `site-shared.js` (WhatsApp + Calendar) | `site-shared.js` | Feito |
| Páginas SEO: Campinas, emagrecimento, consulta online | `*.html` | Feito |
| Página links (Instagram) | `links.html` | Feito |
| Sitemap com URLs publicadas | `sitemap.xml` | Feito (8 URLs) |

### Pendente / opcional

| Item | Fase | Notas |
|---|---|---|
| `saude-hormonal-feminina.html` | 2 | Ainda não criada |
| `reeducacao-alimentar.html` | 2 | Ainda não criada |
| `bioimpedancia-campinas.html` | 2 | Ainda não criada |
| Depoimentos reais autorizados | 3 | Substituir placeholder |
| Fotos profissionais novas (hero/sobre) | 3 | Quando disponíveis |
| Hero WebP + `<picture>` | 1 | Performance |
| GA4 com ID real (`G-F3643H20MW`) | 3 | Feito — `analytics.js` + eventos |
| Lead magnet (PDF + formulário) | 3 | Link em `/links` desabilitado |
| Mapa + endereço completo (NAP) | 2–3 | Se endereço for público |
| Blog / conteúdo evergreen | 3 | Médio prazo |

---

## Fase 1 — Ajustes pontuais na home

**Arquivos:** [`index.html`](index.html), [`styles.css`](styles.css)

**Princípio:** preservar layout e identidade visual; alterar copy, CTAs, schema e pontos de conversão.

### 1.1 Hero, meta e autoridade

| Elemento | Diretriz |
|---|---|
| `<title>` | Nutricionista em Campinas \| Emagrecimento Feminino e Saúde Hormonal — Ana Fedel |
| `meta description` | Mulheres, Campinas/online, emagrecimento, saúde hormonal, acompanhamento personalizado |
| H1 | Emagrecimento feminino com estratégia, leveza e acompanhamento individualizado |
| Faixa de confiança | Atendimento online e presencial em Campinas — Cambuí · CRN 91723 |
| CTA primário | `data-gcal-label="Agendar minha consulta"` |
| CTA secundário | Conhecer os planos (`#planos`) + Falar comigo (WhatsApp) |

Atualizar também `og:*`, `twitter:*` e `description` no JSON-LD.

### 1.2 Seções da homepage (incrementais)

1. **`#identificacao`** — empatia com a dor (“faz tudo certo e não evolui?”).
2. **`#especialidades`** — para quem é o acompanhamento (grid ou bullets emocionais).
3. **`#processo`** — como funciona (3 passos).
4. **`#metodo`** — método nomeado, ciência + leveza; foto do consultório.
5. **`#diferenciais`** — 6 diferenciais (investigação, rotina, exames, WhatsApp, bioimpedância, sem terrorismo nutricional).
6. **`#planos`** — taglines, “para quem”, badge no Transformar, CTAs Calendar.
7. **`#depoimentos`** — estrutura pronta; placeholder até autorizações.
8. **`#sobre`** — vínculo humano + CTA agendar.
9. **`#faq`** — 10 perguntas comerciais; sincronizar `FAQPage` no JSON-LD.
10. **CTA final** — Calendar + WhatsApp.

**Ordem sugerida (jornada mobile):** hero → identificação → especialidades → processo → diferenciais → planos → depoimentos → sobre → método → CTA → FAQ.

*Opcional (baixo risco):* 3 FAQ em destaque antes dos planos com link “Ver todas” → `#faq`.

### 1.3 WhatsApp secundário

Mensagens em [`site-shared.js`](site-shared.js) via `data-wa`:

- `general` — visita geral ao site
- `transformar` — interesse no plano de 3 meses

- Botão fixo mobile (`.whatsapp-float`) — `max-width: 768px`, `safe-area`
- Repetir WhatsApp no hero e CTA final

### 1.4 Performance (sem mudar visual)

| Ação | Detalhe |
|---|---|
| Hero WebP | `<picture>` + fallback JPG; manter `preload` |
| Dimensões | `width`/`height` nas `<img>` principais |
| Lazy load | Abaixo da dobra; hero `fetchpriority="high"` |
| Fontes | Manter 2 famílias; evitar pesos não usados |
| Loader | Garantir que não atrase LCP além do necessário |

Meta aspiracional: LCP &lt; 2,5s mobile, CLS &lt; 0,1.

---

## Fase 2 — SEO e captação

### 2.1 Páginas de serviço (HTML estáticos)

| Arquivo | Foco | Status |
|---|---|---|
| `nutricionista-em-campinas.html` | SEO local (prioridade) | Publicada |
| `emagrecimento-feminino.html` | Serviço + conversão | Publicada |
| `saude-hormonal-feminina.html` | SOP, menopausa, hormonal | Publicada |
| `consulta-online.html` | Captação nacional | Publicada |
| `reeducacao-alimentar.html` | Evergreen | Publicada |
| `bioimpedancia-campinas.html` | Busca local | Publicada |

**Padrão de cada página:** meta únicos, nav/footer alinhados ao site, ~600–900 palavras, H1 único, CTA Calendar + WhatsApp, breadcrumb, link “Voltar ao site”.

**Atualizar:** [`sitemap.xml`](sitemap.xml) e conferir [`robots.txt`](robots.txt).

### 2.2 Página `/links` (Instagram)

Arquivo [`links.html`](links.html):

- Agendar (Calendar)
- Ver planos (`index.html#planos`)
- WhatsApp
- Depoimentos (`index.html#depoimentos`)
- Consulta online
- Conhecer o site completo
- Placeholder “Baixar guia” (desabilitado até Fase 3)

### 2.3 Mapa e NAP (opcional)

Se endereço completo for público:

- Embed Google Maps na página Campinas
- Endereço textual no rodapé (consistência NAP)
- Alinhar Google Business Profile (ação fora do código)

---

## Fase 3 — Quando conteúdo estiver pronto

| Item | Abordagem |
|---|---|
| Depoimentos reais | Cards com iniciais + texto autorizado; opcional `depoimentos.html` |
| Fotos profissionais | Trocar hero e sobre quando entregues |
| Lead magnet | PDF + formulário; ativar link na `/links` |
| Blog | Pasta `blog/` ou páginas estáticas por tema |
| Analytics | GA4 + eventos `click_whatsapp`, `click_agendar` |
| Landing plano trimestral | Opcional: `plano-transformar.html` |

---

## Conteúdo necessário da Ana (bloqueios)

| Item | Fase | Status |
|---|---|---|
| CRN 91723 | 1 | Disponível — no hero/rodapé/schema |
| Endereço Cambuí (se público) | 1–2 | Confirmar o que pode ir no site |
| 2–4 depoimentos autorizados | 1 → 3 | Pendente |
| Fotos novas hero/sobre | 3 | Pendente |
| PDF lead magnet | 3 | Pendente |
| ID Google Analytics 4 | 3 | `G-F3643H20MW` — instalado |

---

## Arquivos principais

| Arquivo | Papel |
|---|---|
| [`index.html`](index.html) | Homepage — mudanças pontuais |
| [`styles.css`](styles.css) | Estilos — componentes novos sem redesign |
| [`site-shared.js`](site-shared.js) | WhatsApp + Google Calendar |
| Páginas SEO + `links.html` | Crescimento orgânico e Instagram |
| [`sitemap.xml`](sitemap.xml) | URLs indexáveis |
| `img/*` | WebP/JPG otimizados |
| Este plano | Referência de execução |

**Fora do escopo de código:** Google Business, campanhas pagas, e-mail marketing pós-lead.

---

## Ordem de execução recomendada

1. Hero + meta + faixa CRN/local + CTAs padronizados  
2. Seções de valor (identificação, diferenciais, planos, FAQ) + JSON-LD  
3. WhatsApp float + `site-shared.js`  
4. Performance de imagens  
5. Página `nutricionista-em-campinas.html` + sitemap  
6. Demais páginas SEO + `links.html`  
7. Depoimentos/fotos/GA4/lead magnet quando prontos  

---

## Critérios de aceite

- [ ] Visitante mobile entende em ~5s: para quem, o quê, onde, como agendar.
- [ ] Google Calendar é CTA primário em hero, planos, sobre e CTA final.
- [ ] WhatsApp acessível (hero, plano Transformar, float mobile) com mensagem pré-preenchida.
- [ ] Estilo visual atual mantido — sem redesign da homepage.
- [ ] Alterações na `index.html` permanecem incrementais e de baixo risco.
- [ ] FAQ visível; schema `FAQPage` alinhado ao HTML.
- [ ] `sitemap.xml` lista todas as páginas publicadas.
- [ ] Lighthouse mobile: Performance e SEO ≥ 90 (registrar baseline).

---

## Referência rápida — wireframe da homepage

| # | Seção | Objetivo |
|---|---|---|
| 1 | Hero | Promessa + CRN + agendar |
| 2 | Identificação | Empatia / dor |
| 3 | Especialidades | Para quem é |
| 4 | Processo | Como funciona |
| 5 | Diferenciais | Por que escolher |
| 6 | Planos | Conversão |
| 7 | Depoimentos | Prova social |
| 8 | Sobre | Confiança humana |
| 9 | Método | Autoridade clínica |
| 10 | CTA final | Último empurrão |
| 11 | FAQ | Objeções + SEO |

---

*Este plano não deve ser editado automaticamente pelo agente durante implementações — use-o como referência; alterações de escopo devem ser acordadas com a Ana.*
