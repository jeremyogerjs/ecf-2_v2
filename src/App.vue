<template>
  <div id="app">
    <Header></Header>
   <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Nav/Nav';

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Header,
  }
}
</script>

<style>
  body{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Signika', sans-serif;
    font-weight: 300;
}

p,h2{
    margin-block-start: 0;
    margin-block-end: 0;

}
h2{
    font-size: 2em;
}
a{
  font-family: 'Signika', sans-serif;
}

</style>
