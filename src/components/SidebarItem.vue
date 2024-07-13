<template>
  <div
    class="menu-item"
    ref="childrenContainer"
    :style="{
      height: maxHeight === 'auto' ? maxHeight : `${maxHeight}px`,
    }"
  >
    <li class="item" @click="toggleChildren(item)">
      <span>{{ item.name }}</span>
      <div
        v-if="item.children.length"
        class="item-icon"
        :class="{ rotated: showChildren }"
      >
        <img src="../assets/chevron-down-outline.svg" alt="chevron icon" />
      </div>
    </li>
    <ul
      :class="{
        childrenClose: item.children && item.children.length,
        childrenOpen: this.showChildren,
      }"
      class="item-container"
    >
      <sidebar-item
        v-for="child in item.children"
        :key="child.name"
        :item="child"
      ></sidebar-item>
    </ul>
  </div>
</template>
  
<script>
export default {
  props: { item: Object },
  data() {
    return {
      showChildren: false,
      maxHeight: 0,
    };
  },
  methods: {
    toggleChildren(item) {
      if (item.children.length) {
        this.showChildren = !this.showChildren;
        if (this.showChildren) {
          this.openChildren();
        } else {
          this.closeChildren();
        }
      }
    },
    openChildren() {
      const container = this.$refs.childrenContainer;
      this.maxHeight = container.scrollHeight;
      const self = this;
      setTimeout(() => {
        self.maxHeight = "auto";
      }, 300);
    },
    closeChildren() {
      const container = this.$refs.childrenContainer;
      this.maxHeight = container.scrollHeight;
      const self = this;
      setTimeout(() => {
        self.maxHeight = "0";
      }, 0);
    },
  },
};
</script>
  
  <style scoped>
.menu-item {
  min-height: 42px;
  overflow: hidden;
  transition: all 0.3s;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
}
.item:hover {
  background-color: rgb(137, 180, 182);
  cursor: pointer;
  transition: 0.2s ease;
}
.item-icon {
  transform: rotate(-90deg);
  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
}
.item-icon img {
  margin-top: 2px;
}
.childrenClose {
  /* height: 0; */
  padding-left: 20px;
  margin-top: 5px;
  overflow: hidden;
  transition: max-height 0.2s ease;
}
.childrenOpen {
  /* height: auto; */
  transition: max-height 0.2s ease;
  overflow: hidden;
}
.rotated {
  transform: rotate(0deg);
  transition: all 0.2s ease;
}
</style>