<template>
  <div>
    <router-link to="/todo?id=12345">
      <h1>{{ txt }}</h1>
    </router-link>
    <router-link to="/news">
      <h1>to newsList</h1>
    </router-link>
    <button @click="getJson">父传子数据</button>
    <button @click="getJson">父传子数据</button>
    <button @click="HClick">父传子dom(自己)</button>
    <button @click="emitNews">非父子传值广播</button>
    <br />
    <a @click="toContent(title)">router to content</a>
  </div>
</template>
<script>
  import VueEvent from '../common/emit.js'
  export default {
    name: 'Header',
    // 父传子
    props: ['txt', 'getJson', 'home'],
    data () {
      return {
        todo: [],
        title: 'son01Header',
      }
    },
    methods: {
      HClick() {
        console.log(this.$parent.txt, 1);
        console.log(this.home.txt, 2);
        this.getJson();
      },
      emitNews(){
        VueEvent.$emit('news', this.title)
      },
      toContent(val){
        this.$router.push(`/content/${val}`)
      }
    },
    beforeCreate() {
      console.log('在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用');
    },
    created() {
      console.log('在实例创建完成后被立即调用');
    },
    beforeMount() {
      console.log('在挂载开始之前被调用');
    },
    mounted() {
      console.log('Vue实例挂载到实例上去之后调用该钩子');
      // 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
      this.$nextTick(function () {
        // 所有的子组件也都一起被挂载可以用 vm.$nextTick
        // Code that will run only after the
        // entire view has been rendered
      })
    },
    beforeUpdate() {
      console.log('数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前');
    },
    updated() {
      console.log('发生在虚拟 DOM 重新渲染和打补丁之后');
      // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。
      this.$nextTick(function () {
        // 所有的子组件也都一起被挂载可以用 vm.$nextTick
      })
    },
    activated() {
      console.log('keep-alive 组件激活时调用');
    },
    deactivated() {
      console.log('keep-alive 组件停用时调用');
    },
    beforeDestroy() {
      console.log('Vue 实例销毁之前调用');
    },
    destroyed() {
      console.log('Vue 实例销毁后调用');
    },
    errorCaptured(err, vm, info) {
      console.log('当捕获一个来自子孙组件的错误时被调用');
    }
  }
</script>
<style>
</style>
