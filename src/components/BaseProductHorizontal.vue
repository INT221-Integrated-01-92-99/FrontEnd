<template>
  <div class="productHorizontal">
    <div class="lg:pb-8 lg:pt-6 flex justify-center space-y-4 pt-24 pb-12">
      <h1
        class="font-serif text-cream-dark 2xl:text-5xl xl:text-5xl text-5xl font-bold"
      >
        View Products
      </h1>
    </div>

    <base-product></base-product>

    <footer class="bg-cream-light">
      <button id="scrollToTopBtn" class="" @click="backToTop">
        <img src="../assets/icon/up-arrow.svg" class="-mt-6" />
      </button>
    </footer>
  </div>
</template>

<style>
footer {
  /* background-color: #f2efe8; */
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

#scrollToTopBtn {
  /* background-color: black; */
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 16px;
  line-height: 48px;
  width: 48px;
}
</style>

<script>
import BaseProduct from "./BaseProduct.vue";
export default {
  name: "Product",
  components: {
    BaseProduct,
  },

  data() {
    return {};
  },
  methods: {
    backToTop() {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      var rootElement = document.documentElement;

      function scrollToTop() {
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
    },
  },
};
</script>
