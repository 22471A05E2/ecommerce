import { configureStore, createSlice } from "@reduxjs/toolkit";
const productslice = createSlice({
    name:"products",
    initialState:{veg:[
        {name: 'tomato',price:100.90},
        {name: 'potatoe',price:200.90},
        {name: 'onion',price:300.90},
        {name: 'paneer',price:500.90},
        {name: 'garlic',price:15000.90},
        ],

        nonveg:[
            {name:'chicken',price:'800.00',image:'chicken.png'},
            {name:'grilledchicken',price:'1000.00'},
            {name:'mutton',price:'2000.00'},
            {name:'chillichicken',price:'400.00'},
            {name:'mutton kheema',price:'1500.00'}

        ]
    },
    reducers:{}

});
const cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            const status=state.find((item)=>item.name===action.payload.name);
            if(status){
                status.quantity++;
            }else{
                state.push({...action.payload,quantity:1});
            }
        }
    }

});
export const {addtocart}=cartslice.actions;

//configure the store

const store = configureStore({
    reducer:{products:productslice.reducer,cart:cartslice.reducer},
});
export default store;