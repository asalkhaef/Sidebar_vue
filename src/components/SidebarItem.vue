<template>
  <div>
    <li class="item" @click="toggleChildren">
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
    };
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
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
  height: 0;
  padding-left: 20px;
  margin-top: 5px;
  overflow: hidden;
  transition: height 0.3s ease-out;
}
.childrenOpen {
  height: 150px;
}
.rotated {
  transform: rotate(0deg);
  transition: all 0.2s ease;
}
</style>