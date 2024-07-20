<template>
  <aside
    class="sidebar-container"
    :class="{ active: modelValue }"
    ref="targetElement"
  >
    <the-header>
      <button @click="closeSideBar" class="item-icon close-btn">
        <!-- <img src="../assets/close-outline.svg" alt="sidebar icon" /> -->
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
            stroke-width="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      </button>
    </the-header>
    <ul class="item-container">
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
.sidebar-container {
  color: var(--light-textcolor);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 100vh;
  background-color: var(--light-bg-sidebar);
  overflow: hidden;
  transition: all ease 0.5s;
  transition-property: left;
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 99;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  user-select: none;
  font-size: larger;
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
  background-color: var(--light-hover);
  cursor: pointer;
}
.active {
  left: 0;
}
/* .sidebar-topcontainer {
  width: inherit;
  display: flex;
  justify-content: flex-end;
} */
.close-btn {
  margin: 10px;
  border-radius: 50%;
}
</style>