<template>
  <div class="product">
    <div class="bg-cream-light bg-fixed">
      <div class="pt-16 lg:pr-20 pr-16 flex justify-end space-x-2">
        <base-button
          @click="(viewAddChange = true), this.$router.push('/product/views')"
          txtcolor="text-black"
          txtbutt="View Products"
          class="focus:outline-none font-serif py-2 px-2 pt-4 text-base text-black hover:text-yellow-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-yellow-600"
        >
        </base-button>
        <p class="text-center text-black text-lg pt-3">
          |
        </p>
        <base-button
          @click="(viewAddChange = false), this.$router.push('/product/add')"
          txtcolor="text-black"
          txtbutt="Add Product"
          class="focus:outline-none font-serif py-2 px-2 pt-4 text-base text-black hover:text-yellow-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-yellow-600"
        >
        </base-button>
      </div>
      <div v-if="!viewAddChange">
        <base-form :pro-id="proId"></base-form>
      </div>
      <div v-else>
        <component
          class="lg:flex-col"
          v-bind:is="currentTabComponent"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["proId"],
  components: {},
  data() {
    return {
      currentTabComponent: "base-product-view",
      viewAddChange: true,
    };
  },

  methods: {

    async regist(addNewPro) {
      console.log(addNewPro);
      try {
        await fetch("http://localhost:5000/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            brandName: addNewPro.brandName,
            proName: addNewPro.proName,
            proDescription: addNewPro.proDescription,
            proPrice: addNewPro.proPrice,
            proMFDDATE: addNewPro.proMFDDATE,
            proPathImg: addNewPro.proPathImg,
            proColor: addNewPro.proCol
          }),
        });
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },
  created() {
    this.viewAddChange = false;
    if (this.proId == "views" || this.proId == undefined) {
      this.viewAddChange = true;
    }
  },
  watch: {
    proId: function changeValue() {
      this.viewAddChange = false;
      if (this.proId == "views") {
        this.viewAddChange = true;
      }
    },
  },
};
</script>
