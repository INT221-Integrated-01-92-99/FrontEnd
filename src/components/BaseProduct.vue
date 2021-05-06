<template>
  <div class="oneProduct bg-cream-light bg-fixed">
    <div class="flex flex-wrap justify-center gap-x-20 gap-y-10">
      <base-card
        v-for="pro in productArray"
        :key="pro.id"
        class="px-8 py-6 2xl:w-1/4 lg:w-1/3 w-1/2 transform hover:scale-110 motion-reduce:transform-none duration-700"
      >
        <router-link :to="'/detail?id=' + pro.id">
          <img class="mb-6 rounded-t-sm" :src="pro.proPathImg" />
          <div class="mt-3 text-left">
            <p class="font-serif font-medium text-lg">
              Brand: {{ pro.probrandName }}
            </p>
            <p class="font-serif font-medium text-lg">
              Product Name: {{ pro.proName }}
            </p>
            <p class="font-serif font-medium text-lg">
              Price: {{ pro.proPrice }} THB
            </p>
            <p class="font-serif font-medium text-sm">
              MFD: {{ pro.proMFDDATE }}
            </p>
            <p class="font-serif font-medium text-sm">
              Description: {{ pro.proDescription }}
            </p>
          </div>
        </router-link>
        <div class="flex justify-center mt-3 inset-x-0 bottom-0 space-x-5">
          <router-link :to="'/product/' + pro.id">
            <base-button
              class="font-serif text-base py-1 lg:px-8 px-6 rounded-sm hover:bg-green-600 hover:text-white"
              bgcolor="bg-green-500"
              txtcolor="text-white"
              txtbutt="Edit"
            ></base-button>
          </router-link>
          <base-button
            @click="deletePro(pro.id)"
            class="font-serif text-base lg:px-6 px-4 rounded-sm border border-red-700 hover:bg-red-700 hover:text-white"
            bgcolor=""
            txtcolor="text-red-700"
            txtbutt="Delete"
          ></base-button>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  props: [],

  data() {
    return {
      brandArray: [],
      productArray: [],
      urlProduct: "http://localhost:5000/product",
      urlBrand: "http://localhost:5000/brand",
      sendEdit: false,
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    async deletePro(deleteProduct) {
      if (
        confirm("Are you sure you want to DELETE this product on your page?")
      ) {
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
      } else {
        alert("Your delete was cancel.");
      }
    },
  },
  async created() {
    this.brandArray = await this.fetch(this.urlBrand);
    this.productArray = await this.fetch(this.urlProduct);
  },
};
</script>
