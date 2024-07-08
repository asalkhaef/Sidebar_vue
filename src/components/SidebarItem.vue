<template>
  <div class="item">
    <li>{{ item.name }}</li>
    <div class="item-icon">
      <img src="../assets/chevron-down-outline.svg" alt="chevron icon" />
    </div>
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
.item-icon {
  width: 24px;
}
</style>