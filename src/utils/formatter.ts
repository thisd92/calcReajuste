// Formata número para moeda brasileira (R$ 1.250,00)
export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

// Aplica máscara automática no padrão SEI do Estado do RS: 00/0000-0000000-0
export function mascararProcessoSEI(valor: string): string {
  const apenasNumeros = valor.replace(/\D/g, "").slice(0, 16);

  return apenasNumeros
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{4})(\d)/, "$1/$2-$3")
    .replace(/^(\d{2})\/(\d{4})-(\d{7})(\d)/, "$1/$2-$3-$4");
}
