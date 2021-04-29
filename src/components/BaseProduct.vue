<template>
  <div class="oneProduct bg-cream-light bg-fixed">
    <!-- <section class="text-gray-700"> -->
    <!-- <div class="container px-8 mx-auto lg:px-4"> -->
    <!-- <div class="grid grid-cols-3"> -->
    <!-- <div
          class="flex flex-wrap justify-center mx-auto 2xl:space-x-24 xl:space-x-16 lg:space-x-14"
        > -->
    <div class="flex flex-wrap justify-center gap-x-20 gap-y-10">
      <base-card
        v-for="pro in productArray"
        :key="pro.id"
        class="px-8 py-6 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-full transform hover:scale-110 motion-reduce:transform-none duration-700"
      >
        <router-link :to="{ path: 'detail', query: { id: pro.id } }">
          <!-- <div class="justify-col">
                <div class="h-full w-full mx-auto"> -->
          <img class="mb-6 rounded-t-sm" :src="pro.proPathImg" />
          <div class="mt-3 ml-3">
            <p class="font-serif font-bold lg:text-lg text-xs">
              Brand: {{ pro.probrandName }}
            </p>
            <p class="font-serif font-bold lg:text-lg text-xs">
              Product Name: {{ pro.proName }}
            </p>
            <p class="font-serif font-bold lg:text-lg text-xs">
              MFD: {{ pro.proMFDDATE }}
            </p>
            <p class="font-serif font-bold lg:text-lg text-xs">
              Price: {{ pro.proPrice }} THB
            </p>
            <p class="font-serif font-bold lg:text-lg text-xs">
              Description: {{ pro.proDescription }}
            </p>
          </div>
          <!-- </div>
              </div> -->
        </router-link>
        <div class="flex justify-center lg:pb-5 pb-3 lg:pt-5 pt-3 space-x-5">
          <base-button
            class="font-serif lg:text-base text-sm py-1 lg:px-8 px-5 rounded-sm hover:bg-green-600 hover:text-white"
            bgcolor="bg-green-500"
            txtcolor="text-white"
            txtbutt="Edit"
          ></base-button>
          <base-button
            @click="deletePro(m.id)"
            class="font-serif lg:text-base text-sm py-1 lg:px-6 px-4 rounded-sm hover:bg-red-700 hover:text-white"
            bgcolor="bg-red-600"
            txtcolor="text-white"
            txtbutt="Delete"
          ></base-button>
        </div>
      </base-card>
      <!-- </div> -->
    </div>
    <!-- </section> -->
  </div>
</template>

<script>
export default {
  props: [],
  emits: [],

  data() {
    return {
      brandArray: [],
      productArray: [],
      urlProduct: "http://localhost:5000/product",
      urlBrand: "http://localhost:5000/brand",
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    async deletePro(deleteProduct) {
      confirm("Are you sure you want to DELETE this product on your page?");
      try {
        await fetch(`${this.urlProduct}/${deleteProduct}`, {
          method: "DELETE",
        });
        this.productArray = this.productArray.filter(
          (m) => m.id !== deleteProduct
        );
      } catch (error) {
        console.log(`This product could not delete because ${error}`);
      }
      alert("Your product is now delete");
    },
  },
  async created() {
    this.brandArray = await this.fetch(this.urlBrand);
    this.productArray = await this.fetch(this.urlProduct);
  },
};
</script>
