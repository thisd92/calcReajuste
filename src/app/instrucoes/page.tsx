import Link from "next/link";

export const metadata = {
  title: "Instruções de Uso - Calculadora de Reajuste FGTAS",
  description:
    "Guia passo a passo para a instrução de processos administrativos de reajuste contratual no SEI.",
};

export default function InstrucoesPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8 py-10">
      {/* Cabeçalho */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-5">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Guia de Instrução de Reajuste Contratual
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
          Orientações práticas para elaboração do cálculo do IPCA e instrução do
          processo no SEI.
        </p>
      </div>

      {/* Passo a Passo */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-sm font-semibold">
            1
          </span>
          Passo a Passo no Sistema
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              1. Identificação
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Informe o número do Contrato, o Processo SEI correspondente, o
              Credor (Empresa) e o Objeto/Serviço prestado.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              2. Valores e Datas
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Insira o <strong>Valor Atual em R$</strong> e selecione a{" "}
              <strong>Data da Proposta/Último Reajuste ($IPCA_0$)</strong> e a{" "}
              <strong>Data de Aniversário ($IPCA_n$)</strong>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              3. Memória em PDF
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Após clicar em <strong>Calcular Reajuste</strong>, revise o Quadro
              Resumo e faça o download da{" "}
              <strong>Memória de Cálculo oficial em PDF</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Instrução no SEI */}
      <section className="space-y-4 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-900/50">
        <h2 className="text-lg font-bold text-blue-900 dark:text-blue-200">
          Como instruir o documento no SEI/FGTAS
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-blue-950 dark:text-blue-300">
          <li>Faça o download do PDF gerado por esta aplicação.</li>
          <li>
            No processo SEI da contratação, clique em{" "}
            <strong>Incluir Documento</strong>.
          </li>
          <li>
            Escolha o tipo de documento padronizado (ex:{" "}
            <em>Informação / Memória de Cálculo</em>).
          </li>
          <li>
            Anexe o arquivo PDF gerado como documento externo ou insira os dados
            no corpo da Informação.
          </li>
          <li>
            Encaminhe o processo para validação e assinatura da
            chefia competente.
          </li>
        </ol>
      </section>

      {/* Fundamentação da Fórmula */}
      <section className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Fórmula Aplicada (IPCA/IBGE)
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          O cálculo utiliza a fórmula oficial de reajuste contratual baseada na
          variação dos números-índices do IPCA divulgados pelo IBGE:
        </p>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center font-mono text-sm font-bold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
          R = P₀ × [(IPCAₙ / IPCA₀) - 1]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
          <p>
            • <strong>R:</strong> Parcela do reajuste em Reais (R$)
          </p>
          <p>
            • <strong>P₀:</strong> Valor vigente/inicial do contrato
          </p>
          <p>
            • <strong>IPCAₙ:</strong> Número-índice do mês do reajuste
          </p>
          <p>
            • <strong>IPCA₀:</strong> Número-índice da data base/proposta
          </p>
        </div>
      </section>

      {/* Botão Voltar */}
      <div className="pt-4 flex justify-start">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-colors"
        >
          ← Voltar para a Calculadora
        </Link>
      </div>
    </main>
  );
}
