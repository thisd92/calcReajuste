import { createSlice } from "@reduxjs/toolkit";

const reajusteSlice = createSlice({
    name: 'reajuste',
    initialState: {
        resultado: 0,
    },
    reducers: {
        calcularResultado: (state, action) => {
            state.resultado = action.payload;
        }
    }
})

export const { calcularResultado } = reajusteSlice.actions;
export default reajusteSlice.reducer;