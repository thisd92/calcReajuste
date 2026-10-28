import { IpcaOption } from "@/types/ipca";

export async function fetchIpcaOptions(): Promise<IpcaOption[]> {
  try {
    const url = "https://servicodados.ibge.gov.br/api/v3/agregados/1737/periodos/all/variaveis/2266?localidades=N1[all]";

    const response = await fetch(url, {
      next: { revalidate: 86400 }, // Cache de 24 horas no Next.js
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar dados do IPCA no IBGE");
    }

    const json = await response.json();

    // Extrai o objeto contendo as chaves AAAAMM e os valores dos índices
    const serie = json[0]?.resultados[0]?.series[0]?.serie || {};

    // Mapeia o objeto { "202507": "7633.23", ... } para o nosso formato de opções
    const options: IpcaOption[] = Object.entries(serie).map(([periodo, valor]) => {
      const year = periodo.substring(0, 4);
      const month = periodo.substring(4, 6);

      return {
        label: `${month}/${year}`,
        value: `${month}/${year}`, // Formato MM/AAAA (ex: "07/2025")
        indice: parseFloat(valor as string),
        dataCompleta: `01/${month}/${year}`,
      };
    });

    return options;
  } catch (error) {
    console.error("Falha ao carregar API do IBGE:", error);
    return [];
  }
}

// A função de busca permanece exatamente a mesma!
export function buscarIndicePorMesAno(lista: IpcaOption[], dataCompletaInput: string): IpcaOption | null {
  if (!dataCompletaInput) return null;

  // dataCompletaInput vem do <input type="date"> como "2025-07-15"
  const partes = dataCompletaInput.split("-");
  
  if (partes.length < 2) return null;

  const year = partes[0];
  const month = partes[1];
  const chaveBusca = `${month}/${year}`; // Converte em "07/2025"

  return lista.find((item) => item.value === chaveBusca) || null;
}