<template>
  <div id="List">
    <ol>
      <li v-for="(item,index) in todoItem" v-bind:key="item.id" :class="color[index%2]">
        <ListItem :item="item"/>
      </li>
    </ol>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "list",
  components: {
    ListItem
  },
  props: {
    todoItem: Array
  },
  data() {
    return {
      color: ["white", "peach"]
    };
  },
};
</script>

<style scoped>
@import "../assets/css/todo_list.css";
</style>
