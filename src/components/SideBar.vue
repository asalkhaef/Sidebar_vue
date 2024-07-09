<template>
  <aside class="sidebar-container" :class="{ active: isclicked }">
    <div class="sidebar-topcontainer">
      <button @click="closeSideBar" class="item-icon close-btn">
        <img src="../assets/close-outline.svg" alt="sidebar icon" />
      </button>
    </div>
    <ul v-if="isclicked" class="item-container">
      <sidebar-item
        v-for="item in items"
        :key="item.name"
        :item="item"
      ></sidebar-item>
    </ul>
  </aside>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  props: { isclicked: Boolean, items: Array },
  emits: ["toggle-sidebar"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeSideBar() {
      this.$emit("toggle-sidebar");
      this.isclicked != this.isclicked;
    },
  },
  components: { SidebarItem },
};
</script>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 100vh;
  background-color: cadetblue;
  overflow: hidden;
  transition: all ease 0.5s;
  transition-property: left;
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 99;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.item-icon {
  width: 24px;
}
.expanded {
  width: 250px;
  align-items: flex-start;
}
.item-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  margin-top: 20px;
  width: inherit;
}
.close-btn:hover {
  background-color: rgb(137, 180, 182);
  cursor: pointer;
}
.active {
  left: 0;
}
.sidebar-topcontainer {
  width: inherit;
  display: flex;
  justify-content: flex-end;
}
.close-btn {
  margin: 10px;
  border-radius: 50%;
}
</style>