const API_KEY_PATTERNS = [
  /\bsk-[A-Za-z0-9]{10,}\b/g,
  /\bsk-ant-[A-Za-z0-9\-_]{10,}\b/g,
  /\bxai-[A-Za-z0-9]{10,}\b/g,
  /\bAIza[A-Za-z0-9\-_]{20,}\b/g,
  /\bAKIA[A-Z0-9]{16}\b/g,
  /\bghp_[A-Za-z0-9]{20,}\b/g,
  /\bBearer\s+[A-Za-z0-9\-._~+/]+=*/gi,
];

const KEY_REQUEST =
  /(chave(s)?\s+de\s+api|api\s*key|anthropic_api_key|openai_api_key|secret[_\s]?key)/i;

export function requestsApiKeys(text) {
  return KEY_REQUEST.test(String(text || ""));
}

export function redactSecrets(text) {
  let out = String(text ?? "");
  for (const re of API_KEY_PATTERNS) {
    out = out.replace(re, "[BLOQUEADO]");
  }
  return out;
}

export function maskSecret(value) {
  const v = String(value || "");
  if (!v) return "";
  if (v.length <= 4) return "••••";
  return `••••${v.length <= 6 ? v : v.slice(-6, -2)}`;
}

export function isFinancialCommand(text) {
  return /(retirar|retira|levantar|pagar anúncio|comprar cripto|vender cripto|transferir dinheiro|autorizar pagamento)/i.test(
    String(text || "")
  );
}

export function unknownSpeakerReply() {
  return "Não reconheço esta voz. Só o Senhor Letício pode dar comandos à LétimaX.";
}

export function refuseNonOwner() {
  return {
    refused: true,
    alert: true,
    message:
      "Recusado. A LétimaX obedece única e exclusivamente ao Senhor Letício. Este comando foi registado e o Senhor Letício será notificado.",
  };
}
