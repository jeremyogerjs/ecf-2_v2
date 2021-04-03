
import Accueil from './components/Accueil/Accueil.vue';
import Product from "./components/Product/Product-details";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

export default [
    {path:'/', component:Accueil},
    {path: "/Product",component: Product},
    {path:"/ShoppingCart",component: ShoppingCart},
]