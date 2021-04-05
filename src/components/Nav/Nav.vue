<template>
    <div>
        <nav>
            <div @click="showMenu" id="menu-mobile" :class="{active:show}" >
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
                <li><router-link to="/">journal</router-link> </li>
                <li><router-link to="/">more <span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span></router-link></li>
            </ul>
            <div @click="showPopup" id="nav__cart--mobile">
                <img src="../../assets/Icones/shopping-bag-solid.svg" alt="icone cadenat">
                (2)
            </div>
            <p @click="showPopup">my cart {{ "(" + cartPopup.length +")" }} <span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span></p>
                
        </nav>

        <section class="cart_popup" :class="{isActive:active}" >
            <article :key="index" v-for="(product,index) in cartPopup">
                
                <img :src="require('../../assets/Media/'+`${product.image}`)" :alt="product.title">
                <div>

                    <span @click="removeCart" :id="index"  class="exit"><img :id="index" src="../../assets/Icones/times-solid.svg" alt="croix"></span>
                    <p> {{ product.title }} </p>
                    <p> <span><img src="../../assets/Icones/times-solid.svg" alt="croix"></span> {{ product.quantity }} </p>
                    <span> {{ product.brand }} </span>
                    <p> {{ "$" + product.price + ".00" }} </p>
                </div>
              
                
            </article>
            <span v-if="empty"> {{ emptyCart }} </span>
            <hr>
                <div class="cart_total">
                    <span >TOTAL </span>
                    <span> {{"$" + calcTot + ".00" }} </span>
                </div>
                
                <div class="cart_validation">
                    
                    <button><router-link to="/">VIEW CART</router-link> </button>
                    <button @click="showPopup" ><router-link to="/ShoppingCart">CHECKOUT</router-link></button>
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
                empty:false,                        //Conditional render doesn't working.
                cartPopup:this.$store.state.myCart,
            }
        },
        methods:{
            showPopup(){
                this.active = !this.active;  
            },
            showMenu(){
                
                this.show = !this.show;
            },
            removeCart(e){
               
                this.$store.commit('removetoCart',e);
            }
            
            
        },
        computed:{
            calcTot(){
                return this.$store.state.total;
            },
            emptyCart(){
                this.$store.commit('emptyCart');    //doesn't working
                return this.empty == true;
                }
            },
    }

</script>


<style src="./Nav.css" scoped>



</style>