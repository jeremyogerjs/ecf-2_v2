<template>
    <div>
        <section class="jumpbotron">
            <div class="jumpbotron__content">
                <h2>Plates</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nobis iusto error deserunt eos 
                    est aliquid harum at assumenda quod nostrum nisi cupiditate labore sit in iure voluptatibus impedit, 
                    dignissimos hic commodi? Laborum quibusdam repudiandae molestiae distinctio! Libero 
                </p>
            </div>
        </section>

        <section class="product">
            <article :key="index" v-for="(product,index) in allProduct">
                <router-link class="--overlay" to="/Product"><span > View details</span></router-link>
                <span class="--overlay"> add to cart </span>
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
export default{
    name: 'Accueil',
    data(){
        return{

            allProduct:product,
            show:false,
        }
    },

    mounted(){
        
        console.log(this.allProduct);
    }
}

</script>

<style src="./Accueil.css"  scoped>
    

</style>