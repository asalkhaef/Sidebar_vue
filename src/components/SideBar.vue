<template>
  <aside class="sidebar-container" :class="{ active: isclicked }">
    <div class="sidebar-topcontainer">
      <button @click="closeSideBar" class="item-icon close-btn">
        <img src="../assets/close-outline.svg" alt="sidebar icon" />
      </button>
    </div>
    <ul v-if="isclicked" class="item-container">
      <div v-for="item in items" :key="item.name" class="item">
        <li>{{ item.name }}</li>
        <div class="item-icon">
          <img src="../assets/chevron-down-outline.svg" alt="" />
        </div>
      </div>
    </ul>
  </aside>
</template>

<script>
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
};
</script>

<style scoped>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
ul {
  list-style-type: none;
}
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
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s;
}
.close-btn:hover,
.item:hover {
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