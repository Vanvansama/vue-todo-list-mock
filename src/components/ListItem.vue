<template>
  <div id="listItem">
    <p>
      <input type="checkbox" class="checkbox" @click="handleCheck" v-model="status" />
      <span :class="check" >{{item.todo}}</span>
    </p>
    <!-- <p v-else="db">
      <input @keyup:enter=""/>
    </p> -->
  </div>
</template>

<script>
export default {
  name: "listItem",
  props: {
    item: Object
  },
  data() {
    return {
      status: this.item.status,
    };
  },
  methods: {
    handleCheck() {
      this.status = !this.status;
      this.$store.dispatch('updateTodo',{...this.item,status:this.status})
    }
  },
  computed: {
    check() {
      return this.status ? "check" : "none"
    }
  }
};
</script>

<style scoped>
@import "../assets/css/todo_list.css";
</style>
