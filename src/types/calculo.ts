import { IpcaOption } from "./ipca";

export interface DadosCalculo {
  numeroContrato: string;      // Ex: "129/2025"
  numeroProcesso: string;      // Ex: "25/2159-0001068-9"
  credor: string;              // Ex: "Empresa Jornalística Caldas Junior Ltda"
  servico: string;             // Ex: "Vigilância Monitorada" / "Telefonia"
  valorAtual: number;          // Valor do contrato antes do reajuste (P₀)
  ipcaBase: IpcaOption;        // IPCA₀
  ipcaFinal: IpcaOption;       // IPCAₙ
  percentualReajuste: number;  // % calculado
  parcelaReajuste: number;     // Valor do reajuste em R$
  valorFinal: number;          // Valor atualizado do contrato em R$
}