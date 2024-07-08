<template>
  <div>
    <button class="menu-icon" @click="toogleSideBarState">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>
    <side-bar :isclicked="SideBarIsOpen"></side-bar>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  data() {
    return {
      SideBarIsOpen: false,
    };
  },
  methods: {
    toogleSideBarState() {
      console.log(this.SideBarIsOpen);
      this.SideBarIsOpen = !this.SideBarIsOpen;
      console.log(this.SideBarIsOpen);
    },
  },
  components: {
    SideBar,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.menu-icon {
  position: absolute;
  width: 32px;
  margin: 15px;
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
</style>
