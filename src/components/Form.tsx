import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { calcularResultado } from "../features/calcular/calcularSlice";
import { RootState } from "../app/store";
import './Form.css'

export default function Formulario() {

    const dispatch = useDispatch();
    const resultado: number = useSelector((state: RootState) => state.reajuste.resultado)

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
                        const resultadoCalculado = values.valorPrincipal * (values.indiceN / values.indice0);
                        dispatch(calcularResultado(resultadoCalculado));
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
            </div >
            <div>
                {resultado !== 0 && <p>Valor reajustado: {resultado.toFixed(2)}</p>}
            </div>
        </>
    )
}

export { Formulario };