"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { DadosCalculo } from "@/types/calculo";
import { MemoriaCalculoPDF } from "./pdf/MemoriaCalculoPDF";

export function BtnExportPDF({ dados }: { dados: DadosCalculo }) {
  return (
    <PDFDownloadLink
      document={<MemoriaCalculoPDF dados={dados} />}
      fileName={`memoria-calculo-${dados.numeroContrato.replace(/\//g, "-") || "reajuste"}.pdf`}
      className="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg shadow text-sm transition-colors"
    >
      {({ loading }) =>
        loading
          ? "Gerando PDF da Memória de Cálculo..."
          : "Baixar Memória de Cálculo (PDF)"
      }
    </PDFDownloadLink>
  );
}
