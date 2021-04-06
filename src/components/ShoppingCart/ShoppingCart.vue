<template>
    <div class="bg">
        <h1>Shopping Cart</h1>
        <div class="shopping__cart">
            <div class="category" >
                <span>Product</span>
                <div class="category__other">
                    <span>Quantity</span>
                    <span>Total</span>
                    <span>Action</span>
                </div>
            </div>
                <hr>
                <section>

                    <article :key="index" v-for="(product,index) in productCart">
                        <div class="product">
                            <img :src="require('../../assets/Media/'+`${product.image}`)" :alt="product.title">
                            <div class="product__text">
                                <span>{{ product.brand }}</span>
                                <p>{{ product.title }}</p>
                                <p><span>Color: </span>White</p>
                            </div>
                        </div>
                        <div class="shopping__control--mobile">
                            <div class="shopping_control">
                                <div class="shopping_quantity">
                                    <input type="text" :id="index" :value=" product.quantity ">
                                    <div class="btn_group">
                                        <button :id="index" @click="addQty">+</button>
                                        <button :id="index" @click="subQty">-</button>   
                                    </div>
                                </div>
                            </div>
                            <div class="product__price--mobile">
                                <span class="product__price">{{ "$"+ product.price + ".00" }}</span>
                                <div :id="index" class="exit" @click="removeCart">
                                    <span :id="index"></span>
                                </div>
                            </div>
                        </div>
                    </article>

                </section>
            <div class="shopping__resume--position">
                <div class="shopping__resume">

                    <span>cart overview</span>
                    <div class="shopping__subtotal">
                        <span>subtotal</span>
                        <span>{{ "$"+ calcTot + ".00" }}</span>
                    </div>
                    <div class="shopping__total">
                        <span>total</span>
                        <p>{{ "$"+ calcTot + ".00" + "CAD" }}</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="shopping__checkout">
                <router-link to="/">Continue shopping</router-link>
                <button>checkout {{ "$"+ calcTot + ".00" }}</button>
            </div>
        </div>

    </div>
</template>
<script>
    import Store from '../../store/store'
    
    export default{
        name:'ShoppingCart',
        store:Store,
        data(){
            return{
               productCart:this.$store.state.myCart,

            }
        },
        computed:{
            calcTot(){
                return this.$store.state.total;
            },
        },
        methods:{
            removeCart(e){
               
                this.$store.commit('removetoCart',e);
            },
            addQty(e){
                this.$store.commit('addQuantity',e);
                this.$store.commit ('calcAddTot',this.productCart[e.target.id]);
            },
            subQty(e){
                
                let id = Number(e.target.id)
                if(this.$store.state.myCart[id].quantity == 0){
                    this.$store.state.myCart[id].quantity ==0;
                    this.$store.commit ('calcSubTot',this.productCart[e.target.id]);
                }else{

                    this.$store.commit('subQuantity',e);
                    this.$store.commit ('calcSubTot',this.productCart[e.target.id]);
                }
            }
        },
       
        

    }
</script>

<style src="./ShoppingCart.css" scoped>

</style>