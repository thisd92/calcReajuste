import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { DadosCalculo } from "@/types/calculo";

const styles = StyleSheet.create({
  page: { padding: 24, fontSize: 9, fontFamily: "Helvetica", color: "#1f2937" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D9E1F2",
    padding: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  logo: { width: 90, height: 28, objectFit: "contain" },
  headerTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    marginLeft: 10,
  },
  sectionTitle: {
    backgroundColor: "#D9E1F2",
    textAlign: "center",
    fontWeight: "bold",
    padding: 4,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#000",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    padding: 4,
  },
  colLabel: { width: "25%", fontWeight: "bold" },
  colValue: { width: "75%" },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  boxHalf: { width: "48%", borderWidth: 1, borderColor: "#000", padding: 6 },
  formulaBox: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    padding: 8,
    marginTop: 10,
    borderRadius: 2,
  },
  formulaTitle: { fontWeight: "bold", marginBottom: 4, fontSize: 9.5 },
  formulaText: { fontSize: 8.5, color: "#475569", marginBottom: 2 },
});

export function MemoriaCalculoPDF({ dados }: { dados: DadosCalculo }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Cabeçalho com o Logo da FGTAS à esquerda */}
        <View style={styles.headerContainer}>
          <Image src="/assets/logo.jpg" style={styles.logo} />
          <Text style={styles.headerTitle}>
            SOLICITAÇÃO DE REAJUSTE DE PREÇO DE CONTRATO DE SERVIÇO
          </Text>
        </View>

        {/* Dados do Processo e Contrato */}
        <View style={{ borderWidth: 1, borderColor: "#000", marginBottom: 8 }}>
          <View style={styles.row}>
            <Text style={styles.colLabel}>Credor / Empresa:</Text>
            <Text style={styles.colValue}>
              {dados.credor || "Não informado"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.colLabel}>Objeto do Contrato:</Text>
            <Text style={styles.colValue}>
              {dados.servico || "Não informado"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.colLabel}>Processo / Contrato:</Text>
            <Text style={styles.colValue}>
              Processo SEI nº {dados.numeroProcesso || "-"} | Contrato nº{" "}
              {dados.numeroContrato || "-"}
            </Text>
          </View>
        </View>

        {/* Memória de Cálculo */}
        <Text style={styles.sectionTitle}>MEMÓRIA DE CÁLCULO</Text>

        <View style={styles.flexRow}>
          {/* Índices Utilizados */}
          <View style={styles.boxHalf}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              ÍNDICES APLICADOS (IPCA/IBGE)
            </Text>
            <Text>
              IPCAn - Mês do Reajuste ({dados.ipcaFinal.label}):{" "}
              {dados.ipcaFinal.indice}
            </Text>
            <Text>
              IPCA0 - Mês Data-Base ({dados.ipcaBase.label}):{" "}
              {dados.ipcaBase.indice}
            </Text>
            <Text style={{ marginTop: 4, fontWeight: "bold" }}>
              Percentual Aplicado: {dados.percentualReajuste.toFixed(4)}%
            </Text>
          </View>

          {/* Quadro Resumo */}
          <View style={[styles.boxHalf, { backgroundColor: "#E2EFDA" }]}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              QUADRO RESUMO
            </Text>
            <Text>
              P0 - Preço Inicial/Atual: R${" "}
              {dados.valorAtual.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Text>
            <Text>
              R - Parcela de Reajuste: R${" "}
              {dados.parcelaReajuste.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 4, fontSize: 10 }}>
              Preço Final Reajustado: R${" "}
              {dados.valorFinal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>

        {/* Bloco Explicativo da Fórmula do Reajuste */}
        <View style={styles.formulaBox}>
          <Text style={styles.formulaTitle}>
            Fórmula de Reajuste Aplicada (IPCA/IBGE):
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 4,
              fontSize: 10,
            }}
          >
            R = P0 x [(IPCAn / IPCA0) - 1]
          </Text>
          <Text style={styles.formulaText}>
            • R = Parcela de reajuste em Reais (R$);
          </Text>
          <Text style={styles.formulaText}>
            • P0 = Preço vigente do contrato no mês de referência;
          </Text>
          <Text style={styles.formulaText}>
            • IPCAn = Número-índice do IPCA referente ao mês do reajuste;
          </Text>
          <Text style={styles.formulaText}>
            • IPCA0 = Número-índice do IPCA referente ao mês da proposta ou do
            último reajuste.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
