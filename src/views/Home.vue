<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  //    ds sad
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    doSomething() {
      if (flag) {
        console.log(1)
      }
    },
  },
}
</script>
