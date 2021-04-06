import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        myCart:[],
        total:0,
    },
    mutations:{
        removetoCart(state,e){
            let id = Number(e.target.id);
            console.log(state.myCart[id].quantity);
            state.total -= (state.myCart[id].price*state.myCart[id].quantity);
            state.myCart[id].quantity = 0;
            state.myCart.splice(id,1);
        },
        calcAddTot(state,target){ 
           return state.total +=  target.price;
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
    },
    actions:{
        

    },
    getters:{
       
    },
})
