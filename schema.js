// Tabelas locais do documento (Room). Ficam de fora, de propósito: `passwords` (o cofre usa o SecureStore, cifrado pelo
// Android Keystore), `chaves_personalizadas` (chaves de API nunca ficam no telemóvel) e `perfil_biometrico` (a APP usa o
// PIN e a biometria do próprio Android, não guarda perfil).
export const ESPELHO = ['rascunhos_produtos', 'motor_receita_oportunidades', 'sistema_raqueamento', 'activos', 'construcao_activos', 'novos_negocios',
  'oportunidades_mercado', 'concorrencia', 'nichos_monitorizados', 'afiliados_externos', 'afiliados_proprios', 'webinars', 'email_marketing', 'testemunhos',
  'reputacao_alertas', 'tickets_suporte', 'onboarding_clientes', 'referencias_indicacoes', 'paginas_criadas', 'sites_criados', 'cursos_videos',
  'apresentacoes_criadas', 'automacao_pontuacao', 'oportunidades_detectadas', 'conteudo_agendado', 'politicas_privacidade', 'analytics'];

export const GENERICAS = ['contexto_ia', 'contratos', 'regras_autonomia', 'diario_decisoes', 'empresa_dados', 'empresa_plano', 'historico_nichos', 'fontes_receita',
  'historico_receita', 'sentimento_analise', 'email_segmentos', 'lancamentos', 'carrinho_abandonado', 'sistema_dispositivo', 'videos_guioes', 'conteudo_marketing',
  'automacao_aprendizagem', 'automacao_cascata', 'direitos_digitais', 'ab_tests', 'precificacao_dinamica', 'versoes_app', 'primeiro_uso', 'segredos_ricos',
  'seguranca_log', 'saude'];

export const ESPECIFICAS = ['conversas', 'configuracoes', 'dashboard_cache', 'logs_erros', 'tentativas_acesso', 'respostas_pre_aprovadas', 'contactos',
  'comandos_voz_log', 'financas_pessoais', 'humor_produtividade', 'metas', 'fila_tarefas'];

export const TODAS = ESPECIFICAS.concat(ESPELHO, GENERICAS);

// endpoint do servidor -> tabela local onde a lista fica espelhada (para offline e backup)
export const MAPA = {
  '/produtos': 'rascunhos_produtos', '/motor-receita/oportunidades': 'motor_receita_oportunidades', '/raqueamento/estrategias': 'sistema_raqueamento',
  '/activos/lista': 'activos', '/activos/progresso': 'construcao_activos', '/negocios/oportunidades': 'novos_negocios', '/mercado/lacunas': 'oportunidades_mercado',
  '/mercado/concorrencia/fichas': 'concorrencia', '/nichos/performance': 'nichos_monitorizados', '/afiliados/ranking': 'afiliados_externos',
  '/afiliados-proprios/ranking': 'afiliados_proprios', '/webinar/lista': 'webinars', '/email/lead-scoring': 'email_marketing', '/reputacao/testemunhos': 'testemunhos',
  '/reputacao/alertas': 'reputacao_alertas', '/suporte/tickets': 'tickets_suporte', '/onboarding/status': 'onboarding_clientes', '/referencias/historico': 'referencias_indicacoes',
  '/pagina/analytics': 'paginas_criadas', '/site/analytics': 'sites_criados', '/curso/lista': 'cursos_videos', '/apresentacao/lista': 'apresentacoes_criadas',
  '/automacao/pontuacao': 'automacao_pontuacao', '/oportunidade/pendentes': 'oportunidades_detectadas',   '/legal/historico-aceitacoes': 'politicas_privacidade', '/analytics/fugas-funil': 'analytics',
};

const ESPECIFICAS_SQL = `
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT, ext_id TEXT);
  CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
  CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
  CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
  CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
  CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS financas_pessoais (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, valor REAL, descricao TEXT, data TEXT);
  CREATE TABLE IF NOT EXISTS humor_produtividade (id INTEGER PRIMARY KEY AUTOINCREMENT, dia TEXT, humor INTEGER, sono REAL);
  CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT, atual REAL DEFAULT 0);
  CREATE TABLE IF NOT EXISTS fila_tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, metodo TEXT, endpoint TEXT, corpo TEXT, rotulo TEXT, criado_em TEXT, tentativas INTEGER DEFAULT 0, estado TEXT DEFAULT 'pendente');
`;

export async function criarTabelas(db) {
  await db.execAsync(ESPECIFICAS_SQL);
  const gen = ESPELHO.concat(GENERICAS)
    .map((t) => 'CREATE TABLE IF NOT EXISTS ' + t + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, ext_id TEXT, dados TEXT, atualizado TEXT);')
    .join('\n');
  await db.execAsync(gen);
  // instalações antigas: acrescentar colunas novas (falha em silêncio se já existirem)
  for (const sql of ['ALTER TABLE conversas ADD COLUMN ext_id TEXT', 'ALTER TABLE metas ADD COLUMN atual REAL DEFAULT 0']) {
    try { await db.execAsync(sql); } catch (e) {}
  }
}
