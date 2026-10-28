export interface ErroValidacao {
  campo: string;
  mensagem: string;
}

/**
 * Valida se a data de aplicação do reajuste (IPCAₙ) é posterior
 * à data da proposta ou do último reajuste (IPCA₀).
 */
export function validarDatasReajuste(
  dataProposta: string,
  dataReajuste: string,
): ErroValidacao | null {
  if (!dataProposta || !dataReajuste) {
    return null;
  }

  const inicio = new Date(dataProposta);
  const fim = new Date(dataReajuste);

  if (fim <= inicio) {
    return {
      campo: "dataReajuste",
      mensagem:
        "A data de aplicação do reajuste deve ser posterior à data da proposta/último reajuste.",
    };
  }

  return null;
}
