const { createSlice } = require("@reduxjs/toolkit");


const  initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            //Redux: 
            // return [...state, action.payload]; //internally did it 
             state.push(action.payload) //can be muted in redux
        },
        remove(state,action){

           return  state.filter(item=>item.id !==action.payload);

        }
    }
})
export const {add,remove} = cartSlice.actions;


export default cartSlice.reducer;

