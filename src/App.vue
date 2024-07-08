<template>
  <div>
    <button class="menu-icon" @click="toggleSideBarState">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>
    <side-bar
      @toggle-sidebar="toggleSideBarState"
      :isclicked="SideBarIsOpen"
      :items="itemsList"
    ></side-bar>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  data() {
    return {
      SideBarIsOpen: false,
      itemsList: [
        {
          name: "Home",
          children: [],
        },
        {
          name: "About",
          children: [],
        },
        {
          name: "Contact",
          children: [],
        },
        {
          name: "Settings",
          children: [],
        },
      ],
    };
  },
  methods: {
    toggleSideBarState() {
      console.log("sideBarOpen? : " + this.SideBarIsOpen);
      this.SideBarIsOpen = !this.SideBarIsOpen;
      console.log("sideBarOpen? : " + this.SideBarIsOpen);
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
