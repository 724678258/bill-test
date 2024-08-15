// import { configureStore } from "@reduxjs/toolkit";
// import reducer from './modules/billStores'

// const store = configureStore({
//     reducer: {
//         bull: reducer
//     }
// })

// export default store

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/billStores";

const store = configureStore({
    reducer:{
        bill: reducer
    }
})

export default store