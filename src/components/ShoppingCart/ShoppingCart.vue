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
            <article>
                <div class="product">
                    <img src="../../assets/Media/hand-painted-blue-flat-dish.jpg" alt="">
                    <div class="product__text">
                        <span>kiriko</span>
                        <p>hand painted blue flat dish</p>
                        <p><span>Color: </span>White</p>
                    </div>
                </div>
                <div class="shopping__control--mobile">
                    <div class="shopping_control">
                        <div class="shopping_quantity">
                            <input type="text" value="">
                            <div class="btn_group">
                                <button>+</button>
                                <button>-</button>   
                            </div>
                        </div>
                    </div>
                    <div class="product__price--mobile">
                        <span class="product__price">$28.00</span>
                        <div class="exit">
                            <span>X</span>
                        </div>
                    </div>
                </div>
            </article>
            <div class="shopping__resume--position">
                <div class="shopping__resume">

                    <span>cart overview</span>
                    <div class="shopping__subtotal">
                        <span>subtotal</span>
                        <span>$56.00</span>
                    </div>
                    <div class="shopping__total">
                        <span>total</span>
                        <p>$56.00 CAD</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="shopping__checkout">
                <router-link to="/">Continue shopping</router-link>
                <button>checkout ($56.00)</button>
            </div>
        </div>

    </div>
</template>
<script>
    
    
    export default{
        name:'ShoppingCart',
        data(){
            return{
               

            }
        },
       
        

    }
</script>

<style src="./ShoppingCart.css" scoped>

</style>