<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in obj.list">
        <h2 :title="title">{{ item.name }}</h2>
        <span
          v-for="(value, index) in item.action"
          :class="{red:value==='跪搓衣板', blue:value==='回家'}"
        >
          {{ value }} <span v-if="index<item.action.length-1">，</span>
        </span>
      </li>
    </ul>
    <div
      v-html="dom"
      :style="{'line-height': style.height}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!',
      title: 'name',
      obj: {
        list: [{
          name: '老李',
          action: ['回家', '收衣服', '修电脑', '跪搓衣板' ]
        }],
      },
      style: {
        height: '150px'
      },
      dom: "<p>我是被控制的P标签</p>"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
</style>
