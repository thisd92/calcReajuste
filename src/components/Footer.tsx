import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800 mt-auto">
      <div className="max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo e Identificação Institucional */}
          <a
            href="https://fgtas.rs.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 mb-4 sm:mb-0 transition-opacity hover:opacity-90"
          >
            <Image
              src="/assets/logo.jpg"
              width={200}
              height={60}
              className="h-8 w-auto object-contain"
              alt="Logo FGTAS"
            />
            <span className="self-center text-sm font-semibold whitespace-nowrap text-gray-600 dark:text-gray-300 border-l border-gray-300 dark:border-gray-700 pl-3">
              Fundação Gaúcha do Trabalho e Ação Social
            </span>
          </a>

          {/* Links Internos e Externos */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4 sm:gap-6">
            <li>
              <Link
                href="/instrucoes"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-gray-700 dark:text-gray-300"
              >
                Instruções de Uso
              </Link>
            </li>
            <li>
              <a
                href="https://fgtas.rs.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Portal FGTAS
              </a>
            </li>
            <li>
              <a
                href="https://servicodados.ibge.gov.br/api/v3/agregados/1737/periodos/all/variaveis/2266?localidades=N1[all]"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                API IPCA (IBGE)
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:my-6" />

        {/* Rodapé com Direitos e Crédito do Desenvolvedor */}
        <div className="sm:flex sm:items-center sm:justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>
            © {currentYear}{" "}
            <a
              href="https://fgtas.rs.gov.br"
              className="hover:underline font-medium"
            >
              FGTAS
            </a>
            . Todos os direitos reservados.
          </span>
          <span className="mt-2 sm:mt-0 font-medium text-gray-600 dark:text-gray-400">
            Desenvolvido por{" "}
            <strong className="text-blue-600 dark:text-blue-400">Diego</strong>{" "}
            • Sistema de Reajuste de Contratos
          </span>
        </div>
      </div>
    </footer>
  );
}
