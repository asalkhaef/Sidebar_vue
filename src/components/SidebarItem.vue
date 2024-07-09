<template>
  <div>
    <li class="item">
      <span>{{ item.name }}</span>
      <div class="item-icon">
        <img src="../assets/chevron-down-outline.svg" alt="chevron icon" />
      </div>
    </li>
    <ul v-if="item.children && item.children.length" class="children">
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
};
</script>
  
  <style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s;
}
.item:hover {
  background-color: rgb(137, 180, 182);
  cursor: pointer;
}
.item-icon {
  width: 24px;
  height: 24px;
}
.item-icon img {
  margin-top: 2px;
}

.children {
  padding-left: 20px;
}
</style>