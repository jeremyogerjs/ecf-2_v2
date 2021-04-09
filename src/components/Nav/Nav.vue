<template>
    <div>
        <nav>
            <div @click="showMenu" id="menu--mobile" :class="{active:show}" >
                <span ></span>
            </div>
            <div>
                <router-link to="/">
                    <img src="../../assets/Media/logo.png" alt="Hero logo de l'entreprise">
                </router-link>
            </div>
            <ul :class="{isActive:show}">
                <li> <router-link to="/">Home</router-link></li>
                <li><router-link to="/">shop<span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span></router-link> </li>
                <li><router-link to="/">journal</router-link></li>
                <li><router-link to="/">more <span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span></router-link></li>
            </ul>
            <div @click="showPopup" id="nav__cart--mobile">
                <img src="../../assets/Icones/shopping-bag-solid.svg" alt="icone cadenat">
                {{ "(" + cartPopup.length +")" }}
            </div>
            <p @click="showPopup">my cart {{ "(" + cartPopup.length +")" }} 
                <span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span>
            </p>                
        </nav>
        <section class="cart__popup" :class="{isActive:active}" >
            <article :key="index" v-for="(product,index) in cartPopup">               
                <img :src="require('../../assets/Media/'+`${product.image}`)" :alt="product.title">
                <div>
                    <p> {{ product.title }} <span><img src="../../assets/Icones/times-solid.svg" alt="croix"></span>{{ product.quantity }} </p>
                    <span> {{ product.brand }} </span>
                    <p> {{ "$" + product.price + ".00" }} </p>
                </div>
                    <div class="exit">
                        <span @click="removeCart" :id="index" ></span>
                    </div>
            </article>
            <span v-if="this.$store.state.empty" id="empty"> {{ this.message }} </span>
            <hr>
                <div class="cart__total">
                    <span >TOTAL </span>
                    <span> {{"$" + calcTot + ".00" }} </span>
                </div>
                
                <div class="cart__validation">
                    
                   <router-link to="/"><button>VIEW CART</button></router-link>
                    <router-link to="/ShoppingCart"><button @click="showPopup" >CHECKOUT</button></router-link>
                </div>
        </section>
    </div>
</template>

<script>
import Store from '../../store/store'
    export default{
        name:'Nav',
        store: Store,
        data(){
            return{
                active:false,
                show:false,                              
                cartPopup:this.$store.state.myCart,
                message:'Your cart is empty !',
            }
        },
        methods:{
            showPopup(){
                this.active = !this.active;
                this.emptyCart();
            },
            showMenu(){ 
                this.show = !this.show;
            },
            removeCart(e){
               
                this.$store.commit('removetoCart',e);
                this.emptyCart();
            },
            emptyCart(){
                this.$store.dispatch('emptyCart');
            }
        },
        computed:{
            calcTot(){
                return this.$store.state.total;
            },
            
        },   
    }
</script>


<style src="./Nav.css" scoped>



</style>