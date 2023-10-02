import { createSlice } from "@reduxjs/toolkit";

const reajusteSlice = createSlice({
    name: 'reajuste',
    initialState: {
        resultado: 0,
        valorParcela: 0,
        indice: 0,
    },
    reducers: {
        calcularResultado: (state, action) => {
            state.resultado = action.payload;
        },
        calcularParcela: (state, action) => {
            state.valorParcela = action.payload;
        },
        calcularIndice: (state, action) => {
            state.indice = action.payload
        }

    }
})

export const { calcularResultado, calcularParcela, calcularIndice } = reajusteSlice.actions;
export default reajusteSlice.reducer;