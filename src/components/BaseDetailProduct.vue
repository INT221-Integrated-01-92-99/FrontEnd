<template>
  <div class="detailProduct bg-cream-light bg-fixed">
    <div class="grid place-items-center h-screen">
      <section
        class="flex flex-col md:flex-row gap-11 py-10 px-5 2xl:mt-16 w-11/12 md:max-w-full"
      >
        <div class="">
          <router-link to="/product/views">
            <button
              class="bg-cream-normal hover:bg-cream-light-brown 2xl:w-20 2xl:h-9 md:w-10 md:h-7 flex justify-center"
            >
              <img class="h-full" src="../assets/icon/left-arrow.svg" />
            </button>
          </router-link>
        </div>
        <div class="flex flex-col justify-between w-1/2">
          <img class="" :src="product.proPathImg" />
        </div>
        <div class="font-serif space-y-2 w-3/4">
          <h3 class="text-black 2xl:text-2xl xl:text-2xl text-2xl font-medium">
            Brand: {{ product.probrandName }}
          </h3>
          <h3 class="text-black 2xl:text-2xl xl:text-2xl text-2xl font-medium">
            Product Name: {{ product.proName }}
          </h3>
          <h3
            class="text-black 2xl:text-2xl xl:text-2xl text-2xl pb-4 font-medium"
          >
            Price: {{ product.proPrice }} THB
          </h3>
          <p class="text-black">MFD: {{ product.proMFDDATE }}</p>
          <p class="text-black">Description: {{ product.proDescription }}</p>
          <div class="flex justify-start lg:pb-5 pb-3 lg:pt-5 pt-3 space-x-5">
            <router-link :to="'/product/' + product.id">
              <base-button
                class="font-serif lg:text-base md:text-base text-sm py-1 lg:px-6 px-4 rounded-sm hover:bg-green-600 hover:text-white"
                bgcolor="bg-green-500"
                txtcolor="text-white"
                txtbutt="Edit"
              ></base-button>
            </router-link>

            <base-button
              class="font-serif lg:text-base md:text-base text-sm py-1 lg:px-6 px-4 rounded-sm hover:bg-red-700 hover:text-white"
              bgcolor="bg-red-600"
              txtcolor="text-white"
              txtbutt="Delete"
            ></base-button>
          </div>
        </div>
      </section>
    </div>
  </div>
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
