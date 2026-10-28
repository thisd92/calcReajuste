export interface IpcaApiResponse {
  data: string; // Formato: "DD/MM/AAAA"
  valor: string; // Número-índice do IPCA (ex: "7633.23")
}

export interface IpcaOption {
  label: string; // Ex: "Ago/2026"
  value: string; // Ex: "08/2026"
  indice: number; // Ex: 7633.23
  dataCompleta: string; // "01/08/2026"
}
