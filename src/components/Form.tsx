import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { calcularParcela, calcularIndice, calcularResultado } from "../features/calcular/calcularSlice";
import { RootState } from "../app/store";
import './Form.css'

export default function Formulario() {

    const dispatch = useDispatch();
    const resultado: number = useSelector((state: RootState) => state.reajuste.resultado)
    const valorParcela: number = useSelector((state: RootState) => state.reajuste.valorParcela)
    const indice: number = useSelector((state: RootState) => state.reajuste.indice);

    return (
        <>
            <div>
                <h1>Cálculo de Reajuste</h1>
                <Formik
                    initialValues={{
                        indice0: 0,
                        indiceN: 0,
                        valorPrincipal: 0
                    }}
                    onSubmit={(values) => {
                        const percentual = values.indiceN / values.indice0
                        const resultadoCalculado = values.valorPrincipal * percentual;
                        const valorParcela = values.valorPrincipal * -(1 - (values.indiceN / values.indice0));
                        dispatch(calcularResultado(resultadoCalculado));
                        dispatch(calcularParcela(valorParcela));
                        dispatch(calcularIndice(percentual));
                    }}
                >

                    <Form>
                        <div className="form-control">
                            <label htmlFor="valorPrincipal">Valor Principal:</label>
                            <Field type="number" id='valorPrincipal' name="valorPrincipal" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="indiceN">Indice N:</label>
                            <Field type="number" id="indiceN" name="indiceN" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="indice0">Indice 0:</label>
                            <Field type="number" id="indice0" name="indice0" />
                        </div>
                        <button type="submit" className="calcular-button" >Calcular</button>
                    </Form>
                </Formik>
            </div>
            <div className="results">
                {indice !== 0 && <span>Indice Aplicado: {indice.toFixed(4)}</span>}
                {indice !== 0 && <span>Percentual Aplicado: {(-(1 - indice) * 100).toFixed(2)}%</span>}
                {valorParcela !== 0 && <span>Valor parcela: {valorParcela.toFixed(2)}</span>}
                {resultado !== 0 && <span>Valor reajustado: {resultado.toFixed(2)}</span>}
            </div>
        </>
    )
}

export { Formulario };