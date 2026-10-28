"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo apontando para o portal institucional */}
        <a
          href="https://fgtas.rs.gov.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 rtl:space-x-reverse transition-opacity hover:opacity-90"
        >
          <Image
            src="/assets/logo.jpg"
            width={400}
            height={400}
            className="h-9 w-auto object-contain"
            alt="Logo FGTAS"
            priority
          />
        </a>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Links de Navegação da Aplicação */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-200`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-blue-700 font-semibold rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Cálculos de Reajuste
              </Link>
            </li>
            <li>
              <a
                href="https://sidra.ibge.gov.br/tabela/1737"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Tabela IPCA (IBGE)
              </a>
            </li>
            <li>
              <Link
                href="/instrucoes"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Instruções de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
