<template>
  <div class="container">
    <button class="menu-icon" @click.stop="openSideBar" id="open-btn">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>

    <side-bar v-model="isOpen" :items="itemsList"></side-bar>
    <button class="mode-btn" @click="toggleTheme"></button>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  data() {
    return {
      isOpen: false,
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
              children: [
                {
                  name: "Farazin",
                  children: [],
                },
                {
                  name: "Novaday",
                  children: [],
                },
              ],
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
                  name: "Change Password",
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
    openSideBar() {
      this.isOpen = true;
    },
    toggleTheme() {
      const currentTheme =
        document.documentElement.classList.toggle("dark-mode");
      localStorage.setItem("theme", currentTheme ? "dark" : "light");
    },
    loadTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.documentElement.classList.add(savedTheme + "-mode");
      } else {
        const userPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (userPrefersDark) {
          document.documentElement.classList.add("dark-mode");
        }
      }
    },
  },
  components: {
    SideBar,
  },
  mounted() {
    this.loadTheme();
  },
};
</script>


<style>
* {
  /* color: #fff; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  background-color: var(--bg-color);
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
.mode-btn {
  background-color: var(--sidebar-bg);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* border: 3px solid; */
  cursor: pointer;
  display: grid;
  place-items: center;
  position: fixed;
  top: 15px;
  left: 1850px;
  transition: all 0.3s;
}
.mode-btn:is(:hover, :focus) {
  background-color: var(--hover-color);
  opacity: 0.8;
}
</style>
