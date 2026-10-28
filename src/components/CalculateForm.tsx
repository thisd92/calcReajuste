"use client";

import { useEffect, useState } from "react";
import { DateSelector } from "@/components/DateSelector";
import {
  fetchIpcaOptions,
  buscarIndicePorMesAno,
} from "@/services/ipcaService";
import { IpcaOption } from "@/types/ipca";
import { DadosCalculo } from "@/types/calculo";
import { BtnExportPDF } from "@/components/BtnExportPDF";
import { formatarMoeda, mascararProcessoSEI } from "@/utils/formatter";
import { validarDatasReajuste } from "@/utils/validators";

export function CalculateForm() {
  const [ipcaLista, setIpcaLista] = useState<IpcaOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Campos do Contrato / Processo
  const [numeroContrato, setNumeroContrato] = useState("");
  const [numeroProcesso, setNumeroProcesso] = useState("");
  const [credor, setCredor] = useState("");
  const [servico, setServico] = useState("");
  const [valorAtualInput, setValorAtualInput] = useState<number | "">("");

  // Datas selecionadas
  const [dataProposta, setDataProposta] = useState("");
  const [dataReajuste, setDataReajuste] = useState("");

  // Índices IPCA
  const [ipcaBase, setIpcaBase] = useState<IpcaOption | null>(null);
  const [ipcaFinal, setIpcaFinal] = useState<IpcaOption | null>(null);

  // Resultado completo do cálculo
  const [calculoRealizado, setCalculoRealizado] = useState<DadosCalculo | null>(
    null,
  );

  const [erroData, setErroData] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const lista = await fetchIpcaOptions();
      setIpcaLista(lista);
      setLoading(false);
    }
    init();
  }, []);

  useEffect(() => {
    setIpcaBase(buscarIndicePorMesAno(ipcaLista, dataProposta));
  }, [dataProposta, ipcaLista]);

  useEffect(() => {
    setIpcaFinal(buscarIndicePorMesAno(ipcaLista, dataReajuste));
  }, [dataReajuste, ipcaLista]);

  useEffect(() => {
    const erro = validarDatasReajuste(dataProposta, dataReajuste);
    setErroData(erro ? erro.mensagem : null);
  }, [dataProposta, dataReajuste]);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ipcaBase || !ipcaFinal || !valorAtualInput) {
      alert("Preencha todas as datas e o valor atual do contrato.");
      return;
    }

    const valorAtual = Number(valorAtualInput);
    const percentualReajuste = (ipcaFinal.indice / ipcaBase.indice - 1) * 100;
    const parcelaReajuste = valorAtual * (percentualReajuste / 100);
    const valorFinal = valorAtual + parcelaReajuste;

    setCalculoRealizado({
      numeroContrato,
      numeroProcesso,
      credor,
      servico,
      valorAtual,
      ipcaBase,
      ipcaFinal,
      percentualReajuste,
      parcelaReajuste,
      valorFinal,
    });
  };

  // Função para limpar todos os campos e resetar o estado
  const handleLimpar = () => {
    setNumeroContrato("");
    setNumeroProcesso("");
    setCredor("");
    setServico("");
    setValorAtualInput("");
    setDataProposta("");
    setDataReajuste("");
    setCalculoRealizado(null);
  };

  if (loading) {
    return (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleCalcular}
      className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="flex items-center justify-between border-b pb-3 border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Solicitação de Reajuste de Preço
        </h2>

        {/* Botão secundário de limpar no topo do formulário */}
        <button
          type="button"
          onClick={handleLimpar}
          className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors flex items-center gap-1"
        >
          ✕ Limpar Formulário
        </button>
      </div>

      {/* Dados do Processo / Contrato */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Número do Contrato
          </label>
          <input
            type="text"
            placeholder="Ex: 129/2025"
            value={numeroContrato}
            onChange={(e) => setNumeroContrato(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Número do Processo SEI
          </label>
          <input
            type="text"
            placeholder="Ex: 25/2159-0001068-9"
            value={numeroProcesso}
            onChange={(e) =>
              setNumeroProcesso(mascararProcessoSEI(e.target.value))
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Credor / Empresa
          </label>
          <input
            type="text"
            placeholder="Ex: Nome da Empresa Ltda"
            value={credor}
            onChange={(e) => setCredor(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Descrição do Serviço / Objeto
          </label>
          <input
            type="text"
            placeholder="Ex: Vigilância Monitorada"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Valor Atual do Contrato (R$)
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="0,00"
            value={valorAtualInput}
            onChange={(e) =>
              setValorAtualInput(e.target.value ? Number(e.target.value) : "")
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Seleção de Datas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <DateSelector
          id="data-proposta"
          label="Mês/Ano da Proposta ou Último Reajuste (IPCA₀)"
          value={dataProposta}
          onChange={setDataProposta}
          indiceEncontrado={ipcaBase}
          helpText="Ex: Data base do preço inicial"
        />

        <DateSelector
          id="data-reajuste"
          label="Mês/Ano da Aplicação do Reajuste (IPCAₙ)"
          value={dataReajuste}
          onChange={setDataReajuste}
          indiceEncontrado={ipcaFinal}
          helpText="Ex: Mês de aniversário do contrato"
        />
      </div>

      {/* Alerta de Erro de Validação de Datas */}
      {erroData && (
        <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg text-xs text-red-700 dark:text-red-300 font-medium flex items-center gap-2">
          <span>⚠️</span>
          <span>{erroData}</span>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={!ipcaBase || !ipcaFinal || !valorAtualInput || !!erroData}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2.5 px-5 rounded-lg text-sm transition-colors shadow-sm"
        >
          Calcular Reajuste
        </button>

        <button
          type="button"
          onClick={handleLimpar}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 font-medium py-2.5 px-5 rounded-lg text-sm transition-colors"
        >
          Novo Cálculo / Limpar
        </button>
      </div>

      {/* Resultado do Cálculo */}
      {calculoRealizado && (
        <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-blue-200 dark:border-blue-900 pb-2">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Quadro Resumo do Reajuste
            </h3>
            <button
              type="button"
              onClick={handleLimpar}
              className="text-xs text-blue-700 dark:text-blue-300 hover:underline font-medium"
            >
              + Iniciar Novo Cálculo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <p>
              <strong>Percentual IPCA:</strong>{" "}
              {calculoRealizado.percentualReajuste.toFixed(4)}%
            </p>
            <p>
              <strong>Parcela do Reajuste:</strong>{" "}
              {formatarMoeda(calculoRealizado.parcelaReajuste)}
            </p>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              Novo Valor: {formatarMoeda(calculoRealizado.valorFinal)}
            </p>
          </div>

          {/* Explicação Didática da Fórmula */}
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900/50 text-xs text-gray-600 dark:text-gray-300 space-y-1">
            <p className="font-bold text-gray-800 dark:text-gray-100">
              Fórmula utilizada: R = P₀ x [(IPCAₙ / IPCA₀) - 1]
            </p>
            <p>
              <strong>P₀:</strong> {formatarMoeda(calculoRealizado.valorAtual)}
            </p>
            <p>
              <strong>IPCAₙ ({calculoRealizado.ipcaFinal.label}):</strong>{" "}
              {calculoRealizado.ipcaFinal.indice}
            </p>
            <p>
              <strong>IPCA₀ ({calculoRealizado.ipcaBase.label}):</strong>{" "}
              {calculoRealizado.ipcaBase.indice}
            </p>
          </div>

          <div className="pt-2">
            <BtnExportPDF dados={calculoRealizado} />
          </div>
        </div>
      )}
    </form>
  );
}
