<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="test"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  //    ds sad
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    doSomething() {
      if (this.flag) {
        let hah
        console.log(1)
        window.location = 'daf'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.test {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}
</style>
