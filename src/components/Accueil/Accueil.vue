<template>
    <div>
        <section class="jumpbotron">
            <div class="jumpbotron__content">
                <h2>Plates</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nobis iusto error deserunt eos 
                    est aliquid harum at assumenda quod nostrum nisi cupiditate labore sit in iure voluptatibus impedit, 
                    dignissimos hic commodi? 
                </p>
            </div>
        </section>
        

        <section class="product">
            <article :key="index" v-for="(product,index) in allProduct">
                <router-link class="--overlay" :to="`/Product/${index + 1}`"><span > View details</span></router-link>
                <span :id="index" @click="addToCart" class="--overlay"> add to cart </span>
                <img :src="require('../../assets/Media/'+`${product.image}`)" :alt="product.title">
                <span>{{ product.brand }}</span>
                <p>{{ product.title }}</p>
                <span>{{"$" + product.price + ".00"}} </span>
            </article>

        </section>
        
    </div>
</template>


<script>
import product from '../../product.json';
import Store from '../../store/store'
export default{
    name: 'Accueil',
    store:Store,
    data(){
        return{

            allProduct:product,
            
        }
    },
    methods:{
        addToCart(e){
            //Verify if product has already exist in cart and if true so add jsut quantity
            if(this.$store.state.myCart.find( element => element == this.allProduct[e.target.id])){
                
                this.allProduct[e.target.id].quantity ++;
            }
            else{
                this.$store.state.myCart.push(this.allProduct[e.target.id]);
                this.allProduct[e.target.id].quantity = 1;                      //add new properties for each element add in cart
            }
            this.$store.commit ('calcAddTot',this.allProduct[e.target.id]);  //add price in state.total
           
        },
        
        
    }
}

</script>

<style src="./Accueil.css"  scoped>
    

</style>