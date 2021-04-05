<template>
    <div>
        <hr>
        <div class="breadcrumb">
            <p>Home / PLATES / <span> {{ allProduct[this.Id-1].title }} </span> </p>
        </div>
        <div class="shopping">

            <img :src="require('../../assets/Media/'+`${allProduct[this.Id-1].image}`)" :alt="allProduct[this.Id-1].title">
            <div class="shopping_content">
                <div class="shopping_text">
                    
                    <span>{{ allProduct[this.Id-1].brand }}</span>
                    <p>{{ allProduct[this.Id-1].title }}</p>
                    <span>{{"$"+ allProduct[this.Id-1].price + ".00" }}</span>
                    <span> {{ allProduct[this.Id-1].description }}</span>
                </div>
                <hr>
                <div class="shopping_control">
                    <div class="shopping_quantity">
                        <input type="text" v-model="quantity" value="quantity">
                        <div class="btn_group">

                            <button :id="this.Id-1" @click="addQty">+</button>
                            <button :id="this.Id-1" @click="subQty">-</button>   

                        </div>
                    </div>
                    <button @click="addToCart" class="add">ADD to Cart</button>
                </div>

            </div>

        </div>
       
    </div>
</template>

<script>
import product from '../../product.json';
import Store from '../../store/store';
    export default{
        name:"Product-details",
        store:Store,
        data(){
            return{

                allProduct:product,
                Id:this.$route.params.id, 
                quantity:1,
            }
        },
        methods:{
            addToCart(){
                let id = Number(this.Id-1)
                
                //Verify if product has already exist in cart and if true so add jsut quantity
                if(this.$store.state.myCart.find( element => element == this.allProduct[id])){
                    this.allProduct[id].quantity +=this.quantity;
                }
                else{
                    this.$store.state.myCart.push(this.allProduct[id]);
                    this.allProduct[id].quantity = this.quantity;                      //add new properties for each element add in cart
                }
                this.$store.commit ('calcAddTot',this.allProduct[id]);  //Change data for total but doesn't working probleme when add specify quantity.
            },
             addQty(){
                
                this.quantity++
                
            },
            subQty(){ 
                
                if(this.quantity ==0){
                    this.quantity ==0;
                }else{
                    this.quantity--;
                }   
            }
             
        }
    }


</script>


<style src="./Product.css" scoped>



</style>