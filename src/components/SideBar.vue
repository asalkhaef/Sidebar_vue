<template>
  <aside
    class="text-text-color flex flex-col items-center w-[300px] min-h-screen bg-sidebar-bg overflow-hidden fixed top-0 -left-[300px] z-50 transition-all duration-500 select-none text-xl shadow-custom-shadow"
    :class="{ 'left-0': modelValue }"
    ref="targetElement"
  >
    <slot name="header"> </slot>
    <ul class="flex flex-col gap-5 px-5 mt-5 w-full">
      <sidebar-item
        v-for="item in items"
        :key="item.name"
        :item="item"
      ></sidebar-item>
    </ul>
    <slot name="footer"></slot>
  </aside>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import TheHeader from "./TheHeader.vue";
export default {
  props: {
    modelValue: Boolean, //for v-model
    items: Array,
  },
  emits: ["close-sidebar"],
  data() {
    return {
      // isOpen: false,
    };
  },
  methods: {
    closeSideBar() {
      // this.$emit("close-sidebar");
      this.$emit("update:modelValue", false);
    },
    handleClickOutside(event) {
      if (this.modelValue) {
        if (this.$refs.targetElement.contains(event.target) === false) {
          this.closeSideBar();
        }
      }
    },
  },
  mounted() {
    console.log("mounted");
    document.addEventListener("click", this.handleClickOutside);
  },
  components: { SidebarItem, TheHeader },
};
</script>

<style scoped>
</style>