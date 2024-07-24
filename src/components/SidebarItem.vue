<template>
  <div
    class="min-h-11 overflow-hidden transition-all duration-300"
    ref="childrenContainer"
    :style="computedMaxHeightStyle"
  >
    <!-- "'/' + item.name.toLowerCase().replace(/\s/g, '')" -->
    <router-link :to="routePath(item)">
      <li
        class="flex items-center justify-between p-3 hover:bg-hover-color hover:cursor-pointer hover:transition-all hover:duration-200 hover:ease-in transition-all duration-100"
        @click="toggleChildren(item)"
        :class="{
          'bg-hover-color': isActiveRoute(item),
        }"
      >
        {{ item.name }}
        <div
          v-if="item.children.length"
          class="item-icon size-6 transition-all duration-200 ease-in -rotate-90"
          :class="{ 'rotate-0': showChildren }"
        >
          <!-- <img src="../assets/chevron-down-outline.svg" alt="chevron icon" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </div>
      </li>
    </router-link>
    <ul :class="childrenContainerClass" class="item-container">
      <sidebar-item
        v-for="child in item.children"
        :key="child.name"
        :item="child"
      >
      </sidebar-item>
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
  watch: {
    showChildren() {
      if (this.showChildren) this.openChildren();
      else this.closeChildren();
    },
  },
  methods: {
    toggleChildren(item) {
      if (item.children.length) this.showChildren = !this.showChildren;
      this.$emit("update-selected-item", this.item);
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
    routePath(item) {
      if (item.children.length === 0) {
        return "/" + item.name.toLowerCase().replace(/\s/g, "");
      }
    },
    isActiveRoute(item) {
      const path = this.routePath(item);
      return this.$route.path === path;
    },
  },
  computed: {
    computedMaxHeightStyle() {
      return {
        height:
          this.maxHeight === "auto" ? this.maxHeight : `${this.maxHeight}px`,
      };
    },
    childrenContainerClass() {
      return {
        "pl-5 mt-1 overflow-hidden transition-[max-height] duration-200 ease":
          this.item.children && this.item.children.length,
        "transition-[max-height] duration-200 ease overflow-hidden":
          this.showChildren,
      };
    },
  },
};
</script>
  
<style scoped>
.active {
  background-color: var(--hover-color) !important;
}
</style>