import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Reajuste de Contratos - FGTAS",
  description: "Sistema de cálculo de reajuste de contratos com base no IPCA/IBGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        {/* Cabeçalho */}
        <Navbar />

        {/* Conteúdo Principal Flexível */}
        <div className="flex-1">
          {children}
        </div>

        {/* Rodapé Fixo na Parte Inferior */}
        <Footer />
      </body>
    </html>
  );
}