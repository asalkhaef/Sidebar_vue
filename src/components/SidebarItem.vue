<template>
  <div>
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
      :style="{ maxHeight: showChildren ? `${maxHeight}px` : '0px' }"
      ref="childrenContainer"
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
        if (!this.showChildren) {
          this.calculateHeight();
        } else {
          this.maxHeight = 0;
        }
        this.showChildren = !this.showChildren;
      }
    },
    calculateHeight() {
      this.$nextTick(() => {
        const container = this.$refs.childrenContainer;
        this.maxHeight = this.getTotalHeight(container);
      });
    },
    getTotalHeight(element) {
      let totalHeight = element.scrollHeight;
      const childContainers = element.querySelectorAll(".item-container");
      childContainers.forEach((child) => {
        totalHeight += child.scrollHeight;
      });
      return totalHeight;
    },
  },
};
</script>
  
  <style scoped>
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