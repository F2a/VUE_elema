<template>
  <div>
    <h3>Im Content</h3>
  </div>
</template>
<script >
  export default {
    name: 'Content',
    data () {
      return {
        title: 'Content',
      }
    },
    methods: {},
    mounted() {
      console.log(this.$route.params);
    }
  }
</script>
<style >
</style>
