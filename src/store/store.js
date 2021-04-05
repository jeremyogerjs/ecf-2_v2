import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        myCart:[],
        total:0,
        empty:false,

    },
    mutations:{
        removetoCart(state,e){
            let id = Number(e.target.id);
            state.total -= (state.myCart[id].price*state.myCart[id].quantity);
            state.myCart[id].quantity = 0;
            state.myCart.splice(id,1);
        },
        calcAddTot(state,target){ 
           return state.total += target.price;
        },
        calcSubTot(state,target){
            return state.total -= target.price;
        },  
        addQuantity(state,e){
            let id = Number(e.target.id);
            state.myCart[id].quantity++;
        },
        subQuantity(state,e){
            let id = Number(e.target.id);
            state.myCart[id].quantity--;
        },
        emptyCart(state){                       //Doesn't working to show message when cart is empty.
            if(state.myCart.length == 0){

                return state.empty == true;
            }else{
                return state.empty == false;
            }
        },
    },
    actions:{
        

    },
    getters:{
       
    },
})
