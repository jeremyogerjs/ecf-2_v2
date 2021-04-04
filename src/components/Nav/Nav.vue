<template>
    <div>
        <nav>
            <div v-on:click="showMenu" id="menu-mobile" :class="{active:show}" >
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
            <div v-on:click="showPopup" id="nav__cart--mobile">
                <img src="../../assets/Icones/shopping-bag-solid.svg" alt="icone cadenat">
                (2)
            </div>
            <p :click="showPopup">my cart(2)<span><img src="../../assets/Icones/sort-down-solid.svg" alt="icone fleche du bas"></span></p>
                
        </nav>

        <section class="cart_popup" :class="{isActive:active}">
                <div>
                    <img src="../../assets/Media/hand-painted-blue-flat-dish.jpg" alt="hand-painted-blue-flat-dish">
                    <article>

                        <span v-on:click="showPopup" class="exit"><img src="../../assets/Icones/times-solid.svg" alt="croix"></span>
                        <p>HAND PAINTED BLUE FLAT DISH</p>
                        <p> <span><img src="../../assets/Icones/times-solid.svg" alt="croix"></span> 1</p>
                        <span>KIRIKO</span>
                        <p>$28.00</p>

                    </article>
                </div>
                <hr>
                <div class="cart_total">
                    <span >TOTAL </span>
                    <span>$56.00</span>
                </div>
                
                <div class="cart_validation">
                    
                    <button><router-link to="/">VIEW CART</router-link> </button>
                    <button><router-link to="/ShoppingCart">CHECKOUT</router-link></button>
                </div>
            </section>
    </div>
</template>

<script>
    export default{
        name:'Nav',
        data(){
            return{

                active:false,
                show:false,
            }
        },
        methods:{
            showPopup(){
                this.active = !this.active
            },
            showMenu(){
                
                this.show = !this.show
            },
        },
    }

</script>


<style src="./Nav.css" scoped>



</style>