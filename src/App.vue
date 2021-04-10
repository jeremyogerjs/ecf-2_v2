<template>
  <div id="app">
    <Headertop></Headertop>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Nav/Nav";

export default {
  name: "App",
  components: {
    Headertop: Header,
  },
};
</script>
<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 300;
}
p,
h2 {
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 400;
}
hr {
  border: 0.5px solid #dadada;
  background-color: #dadada;
}
h2 {
  font-size: 2.3em;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
}
a {
  font-family: 'Roboto', sans-serif;
}
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.exit{
  height: 40px;
  width: 13px;
  cursor: pointer;
  margin: 0 0;
  position: absolute;
  right: 0;
  top: 9px;
  background-color: transparent;
}
.exit span {
  width: 100%;
  height: 2px;
  display: block;
  position: absolute;
  transform: translateY(-50%);
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  border-radius: 5px;
}
.exit span::before {
  transform: translateY(0) rotateZ(45deg);
}
.exit span::after {
  transform: translateY(0) rotateZ(-45deg);
}
.exit span::before,
.exit span::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
  background-color: #333;
  transition: transform 0.5s ease-in-out;
  border-radius: 50px;
}
</style>
