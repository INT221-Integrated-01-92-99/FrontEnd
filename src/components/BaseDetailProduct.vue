<template>
  <div class="detailProduct bg-cream-light h-screen">
    <!-- <div class="pt-32 lg:space-x-20 space-x-14"> -->
    <div
      class="flex justify-center pt-32 lg:pb-10 pb-24 2xl:space-x-16 xl:space-x-10"
    >
      <div class="">
        <router-link to="/product">
          <button
            class="bg-cream-normal hover:bg-cream-light-brown w-20 h-11 flex justify-center"
          >
            <img class="h-full" src="../assets/icon/left-arrow.svg" />
          </button>
        </router-link>
      </div>

      <div class="">
        <div class="lg:w-5/6">
          <img
            class="w-auto h-auto rounded-sm shadow-md"
            :src="product.proPathImg"
          />
        </div>
      </div>

      <div class="space-y-3">
        <p
          class="text-cream-dark font-serif pt-1 font-bold lg:text-5xl text-4xl"
        >
          Brand: {{ product.probrandName }}
        </p>
        <p class="text-cream-dark font-serif font-bold lg:text-4xl text-2xl">
          Product Name: {{ product.proName }}
        </p>

        <p class="text-cream-dark font-serif font-bold lg:text-4xl text-2xl">
          Price: {{ product.proPrice }} THB
        </p>
        <p class="text-cream-dark font-serif lg:text-xl text-base">
          MFD: {{ product.proMFDDATE }}
        </p>
        <p class="text-cream-dark font-serif lg:text-xl text-base">
          Description: {{ product.proDescription }}
        </p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  components: {},
  props: [],
  emits: [],

  data() {
    return {
      product: [],
      urlProduct: "http://localhost:5000/product",
    };
  },
  methods: {
    showForm() {
      this.$emit();
    },
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    this.product = await this.fetch(this.urlProduct + `/${id}`);
  },
};
</script>