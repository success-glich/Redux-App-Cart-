const {createSlice} = require("@reduxjs/toolkit");
// enum is in typeSCriptl 

export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});
const  productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,

    },
    reducers:{
       setProducts(state,action){

            //Donot do This here Never
            // const res = await fetch("https://fakestoreapi.com/products");

            state.data=action.payload;
        },
        setStatus(state,action){

            //Donot do This here Never
            // const res = await fetch("https://fakestoreapi.com/products");

            state.status=action.payload;
        },
       
    }

})
export const {setProducts ,setStatus} = productSlice.actions;
export default productSlice.reducer;

//Thunks Middle Ware: The word "thunk" is a programming term that means ' a piece of code that does some delayed work' 
//Rather than execute some logic now, we can write a function body or code that can be used to perform the work later

//Thunk of normal types
// a thunk is function that returns new function  be a async
        export function fetchProducts() {
            return async function fetchProductThunk(dispatch, getState) {
                dispatch(setStatus(STATUSES.LOADING));
                try {
                    const res = await fetch('https://fakestoreapi.com/products');
                    const data = await res.json();
                    dispatch(setProducts(data));
                    dispatch(setStatus(STATUSES.IDLE));
                } catch (err) {
                    console.log(err);
                    dispatch(setStatus(STATUSES.ERROR));
                }
            };
        }