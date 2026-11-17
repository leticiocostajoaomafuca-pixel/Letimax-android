// Um ecrã por módulo, ligado aos endpoints do documento. Cada secção lê um GET; cada acção chama um endpoint.
// Marcadores {id}, {campo} são preenchidos com o item ou com o formulário.
const S = (key, endpoint, title) => ({ key, kind: 'stats', endpoint, title });
const L = (key, endpoint, title, o = {}) => ({ key, kind: 'list', endpoint, title, ...o });
const J = (key, endpoint, title, o = {}) => ({ key, kind: 'json', endpoint, title, ...o });
const B = (key, endpoint, title) => ({ key, kind: 'bars', endpoint, title });
const LOC = (key, tabela, title, o = {}) => ({ key, kind: 'local', tabela, title, ...o });
const A = (label, method, endpoint, o = {}) => ({ label, method, endpoint, ...o });
const T = (name, label, o = {}) => ({ name, label, ...o });
const OPT = (name, label, options) => ({ name, label, type: 'options', options });
const IDF = (n) => T(n, n.replace(/_/g, ' ') + ' (id)');

export const SCREENS = {
  dashboard: { titulo: 'Dashboard',
    sections: [S('d', '/dashboard', 'Hoje'), L('op', '/motor-receita/oportunidades', 'Próxima oportunidade', { limit: 1 }), J('i', '/saude', 'Estado das integrações')],
    actions: [A('🔊 Resumo matinal em voz alta', 'GET', '/resumo-matinal', { speak: true })] },

  mercado: { titulo: 'Mercado',
    sections: [S('m', '/mercado', 'Visão geral'), L('n', '/nichos/performance', 'Nichos por potencial'), L('l', '/mercado/lacunas', 'Lacunas: o que ninguém oferece'),
      L('f', '/mercado/concorrencia/fichas', 'Top concorrentes'), L('a', '/mercado/concorrencia/alertas', 'Alertas de concorrência')],
    actions: [A('Analisar mercado agora', 'GET', '/mercado/agora'), A('Próxima semana', 'GET', '/mercado/proxima-semana'), A('Próximo mês', 'GET', '/mercado/proximo-mes'),
      A('Mudar nicho (pede aprovação)', 'POST', '/nichos/mudar', { form: [T('nicho', 'Novo nicho')], confirm: 'Propor mudança de nicho? Só avança com a sua aprovação.' })] },

  marketing: { titulo: 'Marketing',
    sections: [LOC('c', 'conteudo_agendado', 'Conteúdo criado (guardado neste telemóvel)', { itemTitle: ['tema', 'acao'] })],
    note: 'Escolha o tema e o idioma e depois o canal. Nada é publicado sem a sua aprovação.',
    actions: ['instagram', 'facebook', 'tiktok', 'youtube', 'blog', 'newsletter', 'viral-adaptado'].map((c) =>
      A('Criar ' + c, 'POST', '/conteudo/' + c, { guardarEm: 'conteudo_agendado', form: [T('tema', 'Tema', { multiline: true }), OPT('idioma', 'Idioma', ['PT-BR', 'EN', 'ES'])] }))
      .concat([A('Criar funil de 13 etapas', 'POST', '/automacao/cascata', { form: [T('produto', 'Produto')], body: { tipo: 'funil', produto: '{produto}' } }),
        A('Criar webinar →', 'NAV', 'webinars')]) },

  raqueamento: { titulo: 'Sistema de Raqueamento',
    note: 'Último recurso: só se o Motor de Receita não achar oportunidades acima de 70 durante 7 dias. Nunca activa sozinho.',
    sections: [S('e', '/raqueamento/estado', 'Estado das fontes'),
      L('s', '/raqueamento/estrategias', 'Estratégias disponíveis', { itemActions: [A('Activar', 'POST', '/raqueamento/aprovar/{id}', { confirm: 'Aprova esta estratégia de emergência?' })] }),
      L('h', '/raqueamento/historico', 'Histórico')],
    actions: [A('Activar modo de raqueamento', 'POST', '/raqueamento/activar', { confirm: 'As fontes normais estão em baixo. Activar o raqueamento?' })] },

  activos: { titulo: 'Activos',
    sections: [S('v', '/activos/valor-total', 'Valor total'), L('l', '/activos/lista', 'Activos'), L('p', '/activos/progresso', 'Em construção')],
    actions: [A('Construir novo activo', 'POST', '/activos/construir', { form: [T('activo', 'Activo (ex.: lista de emails)')] })] },

  novonegocio: { titulo: 'Novos Negócios',
    sections: [L('o', '/negocios/oportunidades', 'Oportunidades', { itemActions: [A('Aprovar', 'POST', '/negocios/aprovar/{id}', { confirm: 'Iniciar a implementação deste negócio?' })] }), L('h', '/negocios/historico', 'Histórico')],
    actions: [A('Pesquisar novos negócios', 'GET', '/negocios/pesquisa')] },

  empresa: { titulo: 'Empresa',
    sections: [S('p', '/empresa/progresso', 'Progresso'), J('j', '/empresa/projecao', 'Projecção 6, 12 e 24 meses')],
    actions: [A('Gerar plano da empresa', 'POST', '/empresa/plano', { confirm: 'Gerar o plano completo com todos os dados acumulados?' })] },

  afext: { titulo: 'Afiliados Externos',
    sections: [S('r', '/afiliados/receita', 'Receita de afiliados'), L('k', '/afiliados/ranking', 'Ranking Hotmart e Kiwify', { itemActions: [A('Campanha', 'POST', '/afiliados/campanha', { body: { produto_id: '{id}' } })] })] },

  afprop: { titulo: 'Afiliados Próprios',
    sections: [S('d', '/afiliados-proprios/dashboard', 'Programa'), L('r', '/afiliados-proprios/ranking', 'Mais rentáveis'), L('c', '/afiliados-proprios/comissoes', 'Comissões')],
    actions: [A('Criar programa', 'POST', '/afiliados-proprios/criar-programa', { form: [T('comissao', 'Comissão % (padrão 50)', { number: true })] }),
      A('Gerar link de afiliado', 'POST', '/afiliados-proprios/link/{produto_id}', { form: [IDF('produto_id')] }),
      A('Material de marketing', 'POST', '/afiliados-proprios/material-marketing', { form: [IDF('produto_id')] })] },

  lanc: { titulo: 'Lançamentos',
    sections: [J('e', '/lancamento/estrategia', 'Estratégia', { countdown: true }), S('r', '/lancamento/resultado', 'Resultado')],
    actions: [A('Criar lançamento', 'POST', '/lancamento/criar', { form: [IDF('produto_id')] }), A('Gerar emails', 'POST', '/lancamento/emails', { form: [IDF('produto_id')] })] },

  webinars: { titulo: 'Webinars',
    sections: [L('l', '/webinar/lista', 'Webinars', { itemActions: [A('Script', 'GET', '/webinar/script?webinar_id={id}'), A('Emails', 'POST', '/webinar/emails', { body: { webinar_id: '{id}' } }), A('Resultado', 'GET', '/webinar/resultado?webinar_id={id}')] })],
    actions: [A('Criar webinar', 'POST', '/webinar/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  email: { titulo: 'Email Marketing',
    sections: [S('t', '/email/lista/tamanho', 'Lista'), S('a', '/email/analytics', 'Desempenho'), S('p', '/email/previsao-receita', 'Previsão de receita'), L('s', '/email/lead-scoring', 'Lead scoring', { export: true })],
    actions: [A('Nova sequência', 'POST', '/email/sequencia/criar', { form: [T('tema', 'Tema', { multiline: true })] }),
      A('Segmentar lista', 'POST', '/email/segmentar'), A('Newsletter', 'POST', '/email/newsletter'),
      A('Campanha de reactivação', 'POST', '/email/reativacao', { confirm: 'Enviar 5 emails de reactivação à lista inactiva?' }),
      A('Limpar lista', 'POST', '/email/limpeza', { confirm: 'Remover emails inválidos e de alto bounce?' }),
      A('Adicionar subscritor', 'POST', '/email/lista/adicionar', { form: [T('email', 'Email')] })] },

  analytics: { titulo: 'Analytics',
    sections: [S('c', '/analytics/conversao', 'Conversão'), B('o', '/analytics/origem-vendas', 'Origem das vendas'), S('a', '/analytics/custo-aquisicao', 'Custo de aquisição'),
      S('v', '/analytics/valor-cliente', 'Valor do cliente (LTV)'), S('p', '/analytics/projecao', 'Projecção 30 dias'), L('f', '/analytics/fugas-funil', 'Fugas do funil'),
      B('h', '/analytics/heatmap-horas', 'Dias e horas com mais vendas'), B('n', '/analytics/roi-por-nicho', 'ROI por nicho')] },

  reputacao: { titulo: 'Reputação',
    sections: [S('r', '/reputacao/monitorizar', 'Score de reputação'), J('s', '/sentimento/analise', 'Sentimento'), L('a', '/reputacao/alertas', 'Alertas de menções negativas'), L('t', '/reputacao/testemunhos', 'Testemunhos')],
    actions: [A('Pedir testemunho', 'POST', '/reputacao/pedir-testemunho', { confirm: 'Enviar pedidos de testemunho?' })] },

  suporte: { titulo: 'Suporte',
    sections: [S('s', '/suporte/taxa-satisfacao', 'Satisfação'),
      L('t', '/suporte/tickets', 'Tickets', { warnIf: (i) => Number(i.horas_sem_resposta) > 24,
        itemActions: [A('Responder', 'POST', '/suporte/responder', { form: [T('texto', 'Resposta', { multiline: true })], body: { ticket_id: '{id}', texto: '{texto}' } }),
          A('Reembolso', 'POST', '/suporte/reembolso', { body: { ticket_id: '{id}' }, confirm: 'Processar reembolso? O acesso é revogado em menos de 1 hora.', danger: true })] }),
      L('c', '/suporte/causas-reclamacao', 'Causas mais comuns de reclamação')] },

  onboarding: { titulo: 'Onboarding',
    sections: [S('t', '/onboarding/taxa-conclusao', 'Taxa de conclusão'), L('s', '/onboarding/status', 'Clientes', { itemActions: [1, 3, 7].map((d) => A('Email dia ' + d, 'POST', '/onboarding/email-dia/' + d, { body: { cliente_id: '{id}' } })) })],
    actions: [A('Iniciar onboarding', 'POST', '/onboarding/iniciar', { form: [T('cliente_email', 'Email do cliente'), IDF('produto_id')] })] },

  referencias: { titulo: 'Referências',
    sections: [S('d', '/referencias/dashboard', 'Resumo'), L('h', '/referencias/historico', 'Recompensas')],
    actions: [A('Gerar link de referência', 'POST', '/referencias/link', { form: [IDF('cliente_id')] }),
      A('Recompensar indicação', 'POST', '/referencias/recompensar', { form: [IDF('indicacao_id')], confirm: 'Atribuir a recompensa?' })] },

  paginas: { titulo: 'Páginas',
    sections: [L('p', '/pagina/analytics', 'Páginas', { itemActions: [
      A('Publicar', 'POST', '/pagina/publicar', { body: { pagina_id: '{id}' }, confirm: 'Publicar esta página?' }),
      A('Optimizar', 'POST', '/pagina/optimizar', { body: { pagina_id: '{id}' } }),
      A('Teste A/B', 'POST', '/pagina/ab-test', { body: { pagina_id: '{id}' } }),
      A('Resultado A/B', 'GET', '/pagina/ab-test/resultado?pagina_id={id}')] })],
    actions: [A('Criar nova página', 'POST', '/pagina/criar', { form: [OPT('tipo', 'Tipo', ['vendas', 'captura', 'obrigado', 'upsell', 'downsell', 'lancamento', 'landing']), IDF('produto_id')] })] },

  videos: { titulo: 'Vídeos',
    note: 'O servidor não tem lista de vídeos; cada resultado aparece aqui logo após criar.',
    actions: [A('Criar guião', 'POST', '/video/guiao', { form: [OPT('tipo', 'Tipo', ['VSL', 'YouTube', 'TikTok', 'Reels', 'Anúncio Meta Ads']), T('tema', 'Tema', { multiline: true })] }),
      A('Miniatura', 'POST', '/video/miniatura', { form: [T('titulo', 'Título do vídeo')] }),
      A('Legendas', 'POST', '/video/legendas', { form: [T('guiao', 'Guião', { multiline: true })] }),
      A('Narração', 'POST', '/video/narracao', { form: [T('guiao', 'Guião', { multiline: true })] })] },

  cursos: { titulo: 'Cursos',
    sections: [L('l', '/curso/lista', 'Cursos', { itemActions: [A('Módulos', 'GET', '/curso/modulos?curso_id={id}'),
      A('Guião de aula', 'POST', '/curso/guiao-aula', { body: { curso_id: '{id}' } }), A('Slides', 'POST', '/curso/slides-aula', { body: { curso_id: '{id}' } }), A('Narração', 'POST', '/curso/narracao-aula', { body: { curso_id: '{id}' } })] })],
    actions: [A('Criar novo curso', 'POST', '/curso/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  sites: { titulo: 'Sites',
    sections: [L('s', '/site/analytics', 'Sites', { itemActions: [A('Publicar', 'POST', '/site/publicar', { body: { site_id: '{id}' }, confirm: 'Publicar este site?' }), A('Actualizar', 'POST', '/site/actualizar', { body: { site_id: '{id}' } })] })],
    actions: [A('Criar novo site', 'POST', '/site/criar', { form: [OPT('tipo', 'Tipo', ['institucional', 'blog', 'membership', 'loja online', 'portfolio'])] })] },

  apres: { titulo: 'Apresentações',
    sections: [L('l', '/apresentacao/lista', 'Apresentações')],
    actions: [A('Criar apresentação', 'POST', '/apresentacao/criar', { form: [OPT('tipo', 'Tipo', ['pitch deck', 'proposta de parceria', 'relatório mensal', 'material de formação']), T('tema', 'Tema')] }),
      A('Pitch para investidores', 'POST', '/apresentacao/pitch', { form: [T('tema', 'Tema')] })] },

  automacao: { titulo: 'Automação Inteligente',
    sections: [L('p', '/automacao/pontuacao', 'Acções candidatas por pontuação'), L('s', '/automacao/sugestoes', 'Sugestões'), S('r', '/automacao/roi', 'ROI das automações')],
    actions: [A('Actualizar aprendizagem', 'POST', '/automacao/aprender')] },

  oportunidades: { titulo: 'Oportunidades',
    sections: [L('o', '/oportunidade/pendentes', 'Pendentes', { itemActions: [A('Relatório', 'POST', '/oportunidade/relatorio', { body: { id: '{id}' } }),
      A('Aprovar', 'POST', '/oportunidade/aprovar', { body: { id: '{id}' }, confirm: 'A LétimaX implementa de imediato. Confirma?' })] })],
    actions: [A('Detectar agora', 'POST', '/oportunidade/detectar')] },

  investimentos: { titulo: 'Investimentos',
    note: 'Apenas monitorização. Retiradas e depósitos são sempre manuais.',
    sections: [L('i', '/investimentos', 'Preços Binance')] },

  logs: { titulo: 'Logs',
    sections: [L('l', '/logs', 'Tarefas', { export: true, itemActions: [A('Tentar agora', 'POST', '/retry', { body: { id: '{id}' } })] }), L('a', '/auditoria', 'Auditoria', { export: true }), L('g', '/autonomia/log', 'Log de autonomia'), L('dd', '/decisoes', 'Decisões (servidor)'), LOC('dl', 'diario_decisoes', 'Diário de decisões (neste telemóvel)', { itemTitle: ['acao'] }), LOC('seg', 'tentativas_acesso', 'Log de segurança: tentativas de acesso (neste telemóvel)', { itemTitle: ['metodo'] })] },

  actualizacao: { titulo: 'Actualização',
    note: 'A actualização nunca é obrigatória: decide sempre quando instalar.',
    sections: [S('v', '/versao/atual', 'Versão')],
    actions: [A('Actualizar agora', 'OPEN', 'url', { from: '/versao/atual' }), A('Mais tarde (avisa amanhã)', 'LATER', 'amanha')] },

  documentos: { titulo: 'Documentos',
    sections: [LOC('c', 'contratos', 'Contratos gerados (guardados neste telemóvel)', { itemTitle: ['tipo', 'acao'] }), L('h', '/legal/historico-aceitacoes', 'Aceitação de termos pelos clientes', { export: true })],
    actions: [A('Novo contrato', 'POST', '/contrato', { guardarEm: 'contratos', form: [OPT('tipo', 'Tipo', ['parceria', 'prestação de serviços', 'venda digital', 'NDA', 'proposta de parceria']), T('descricao', 'Descreva em linguagem simples', { multiline: true })] }),
      A('Política de privacidade (LGPD/RGPD)', 'POST', '/legal/politica-privacidade', { form: [IDF('produto_id')] }),
      A('Termos de uso', 'POST', '/legal/termos-uso', { form: [IDF('produto_id')] })] },
};
