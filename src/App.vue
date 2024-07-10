<template>
  <div ref="targetElement">
    <button class="menu-icon" @click="openSideBarState">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>
    <side-bar
      @toggle-sidebar="closeSideBarState"
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
          children: [
            {
              name: "Team",
              children: [],
            },
            {
              name: "Company",
              children: [],
            },
          ],
        },
        {
          name: "Contact",
          children: [],
        },
        {
          name: "Settings",
          children: [
            {
              name: "Profile",
              children: [],
            },
            {
              name: "Security",
              children: [
                {
                  name: "secChild",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    openSideBarState() {
      this.SideBarIsOpen = true;
    },
    closeSideBarState() {
      this.SideBarIsOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.targetElement.contains(event.target)) {
        console.log(this.$refs.targetElement);
        this.closeSideBarState();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
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
ul {
  list-style-type: none;
}
</style>
