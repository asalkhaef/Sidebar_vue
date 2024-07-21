<template>
  <div class="container">
    <button class="menu-icon" @click.stop="openSideBar" id="open-btn">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>

    <side-bar v-model="isOpen" :items="itemsList" class="sidebar-setup">
      <template #header>
        <the-header>
          <button @click="isOpen = false" class="item-icon close-btn">
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
      </template>
      <template #footer>
        <div class="sidebar-footer">
          <p>&copy;This is sidebar footer content.</p>
        </div>
      </template>
    </side-bar>
    <button class="mode-btn" @click="toggleTheme"></button>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import TheHeader from "./components/TheHeader.vue";

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
    TheHeader,
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
.close-btn {
  margin: 10px;
  border-radius: 50%;
}
.close-btn:hover {
  background-color: var(--hover-color);
  cursor: pointer;
}
.item-icon {
  width: 24px;
}
.sidebar-setup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.sidebar-footer {
  font-size: 16px;
  margin-top: auto;
  padding: 20px;
  width: 100%;
  text-align: center;
}
</style>
