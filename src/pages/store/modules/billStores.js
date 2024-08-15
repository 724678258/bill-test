// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// const billStore = createSlice({
//     name: 'bill',
//     initialState: {
//         billList: []
//     },
//     reducers: {
//         setBillList(state, actions) {
//             state.billList = actions.payload
//         }
//     }
// })

// const { setBillList } = billStore.actions


// const getBillList = () => {
//     return async (dispatch) => {
//         const res = await axios.get('http://localhost:8888/ka')
//         dispatch(setBillList(res.data))
//     }
// }

// const reducer = billStore.reducer

// export { getBillList }

// export default reducer

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, actions) {
            state.billList = actions.payload
        }
    }
})

const { setBillList } = billStore.actions

const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))

    }
}
const reducer = billStore.reducer

export { getBillList }
export default reducer


