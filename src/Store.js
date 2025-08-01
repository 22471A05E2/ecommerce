import { configureStore, createSlice } from "@reduxjs/toolkit";
const productslice = createSlice({
    name:"products",
    initialState:{veg:[
        {name: 'Paneer Butter',price:'100.90',image:'paneer.png'},
        {name: 'Veg Biryani',price:'200.90',image:'veg.png'},
        {name: 'Masala Dosa',price:'300.90',image:'dosa.png'},
        {name: 'Chole Bhature',price:'500.90',image:'chole.png'},
        {name: 'Veg Manchurian',price:'15000.90',image:'manchuria.png'},
        ],

        nonveg:[
            {name:'Chicken Tandoori',price:'800.00',image:'chicken.png'},
            {name:'Grilled Chicken',price:'1000.00',image:'grilled.png'},
            {name:'Mutton Rogan Josh',price:'2000.00',image:'mutton.png'},
            {name:'Fish Tikka',price:'400.00',image:'fish.png'},
            {name:'Prawn Biryani',price:'1500.00',image:'prawn.png'}

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
        },
         increment: (state, action) => {
      const item = state.find((ite) => ite.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find((ite) => ite.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    }
  }
});

export const { addtocart, increment, decrement, removeItem } = cartslice.actions;

//configure the store

const store = configureStore({
    reducer:{products:productslice.reducer,cart:cartslice.reducer},
});
export default store;