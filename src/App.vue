<template>
  <div>
    <button class="absolute w-8 m-4" @click.stop="openSideBar" id="open-btn">
      <img src="./assets/menu-outline.svg" alt="sidebar icon" />
    </button>

    <side-bar
      v-model="isOpen"
      :items="itemsList"
      class="flex flex-col justify-between h-full"
    >
      <template #header>
        <the-header>
          <button
            @click="isOpen = false"
            class="w-6 m-3 rounded-full hover:bg-hover-color cursor-pointer"
          >
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
        <div class="text-base mt-auto p-5 w-full text-center">
          <p>&copy;This is sidebar footer content.</p>
        </div>
      </template>
    </side-bar>
    <button
      class="bg-sidebar-bg size-10 rounded-full cursor-pointer grid place-items-center fixed top-4 left-[1850px] transition-all duration-300 hover:bg-hover-color"
      @click="toggleTheme"
    ></button>
    <router-view></router-view>
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  background-color: var(--bg-color);
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
