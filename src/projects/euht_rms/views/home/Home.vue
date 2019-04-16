<template>
  <div class="home">
    <img alt="Vue logo" :src="logoSrc">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
const logoSrc = require('@images/logo.png');
import HelloWorld from '../../components/hello-world/HelloWorld.vue';

export default {
  name: 'home',
  components: { HelloWorld },
  data() {

    return { logoSrc };

  },

};
</script>
