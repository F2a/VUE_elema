<template>
  <div style="width: 300px">
    <div id="header">
      <input type="text" v-model="txt" @keydown="enterAdd">
      <button @click="add">添加</button>
    </div>
    <h2>待完成</h2>
    <ul>
      <li v-for="(value, index) in todo" v-if="!value.finished">
        <input type="checkbox" v-model="value.finished">
        {{ index + 1 }}---{{ value.txt }}
        <span style="margin-left: 15px" @click="deleteTodo(index)">删除</span>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(value, index) in todo" v-if="value.finished">
        <input type="checkbox" v-model="value.finished">
        {{ index + 1 }}---{{ value.txt }}
        <span style="margin-left: 15px" @click="deleteTodo(index)">删除</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Todo',
    data () {
      return {
        txt: '',
        todo: [],
      }
    },
    methods: {
      add() {
        console.log('add');
        this.todo.push({
          txt: this.txt,
          finished: false
        })
        this.txt = '';
      },
      enterAdd(e) {
        console.log(e);
        if(e.keyCode === 13){
         this.add();
        }
      },
      deleteTodo(i) {
        this.todo.splice(i, 1)
      }
    }
  }
</script>
<style scoped>
</style>
