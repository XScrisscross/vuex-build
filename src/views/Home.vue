<template>
  <div class="home">
    <div class="test">这里 :{{ val }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  props: {
    val: {
      type: String,
      default: '1',
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
