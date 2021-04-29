<template>
  <nav
    :class="{ 'bg-opacity-0 shadow-none': routes == '/' }"
    class="navbar fixed flex justify-end w-full 2xl:space-x-10 xl:space-x-9 space-x-8 2xl:p-3 xl:p-3 p-3 2xl:pr-20 xl:pr-20 pr-20 top-0 text-white bg-cream-dark shadow-md"
  >
    <!-- <div class="mr-96">
    <router-link
      @click="changePath('/')"
      tag="li"
      to="/"
      class="flex justify-start tracking-widest 2xl:text-xl text-base font-serif font-semibold mr-96 pr-56"
      ><img class="h-10 w-10" src="./assets/paypal-logo.svg"></router-link
    ></div> -->
    <router-link
      @click="changePath('/')"
      tag="li"
      to="/"
      class="2xl:text-base text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
      >Home</router-link
    >
    <router-link
      @click="changePath('/team')"
      tag="li"
      to="/team"
      class="2xl:text-base text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
      >Team</router-link
    >
    <router-link
      @click="changePath('/product')"
      to="/product"
      class="2xl:text-base text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
      >Product</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      routes: "/",
    };
  },
  methods: {
    changePath(path) {
      this.routes = path;
    },
  },
};
</script>

<style>
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}
</style>
