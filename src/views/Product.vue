<template>
  <div class="product">
    <div class="bg-cream-light bg-fixed">
      <div class="lg:pt-16 pt-14 lg:pr-20 pr-16 flex justify-end space-x-2">
        <base-button
          @click="changeToForm('base-product-horizontal')"
          bgcolor=""
          txtcolor="text-black"
          txtbutt="View Products"
          class="font-serif py-2 px-2 pt-4 text-base text-black hover:text-yellow-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-yellow-600"
        >
        </base-button>
        <p class="text-center text-black text-lg pt-3">
          |
        </p>
        <base-button
          @click="changeToForm('base-form')"
          bgcolor=""
          txtcolor="text-black"
          txtbutt="Add Product"
          class="font-serif py-2 px-2 pt-4 text-base text-black hover:text-yellow-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-yellow-600"
        >
        </base-button>
      </div>
      <component
        class="lg:flex-col"
        v-bind:is="currentTabComponent"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentTabComponent: "base-product-horizontal",
    };
  },

  methods: {
    changeToForm(currentComponent) {
      this.currentTabComponent = currentComponent;
      if (this.currentTabComponent == "base-form") {
        console.log("0");
        // <base-form @add-form = "regist"></base-form>
      }
    },
    // ,
    // async regist(addNewPro) {
    //   try {
    //     await fetch("http://localhost:5000/product", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         probrandName: addNewPro.probrandName,
    //         proName: addNewPro.proName,
    //         proDescription: addNewPro.proDescription,
    //         proPrice: addNewPro.proPrice,
    //         proMFDDATE: addNewPro.proMFDDATE,
    //         proPathImg: addNewPro.proPathImg
    //       }),
    //     });
    //   } catch (error) {
    //     console.log(`Could not save! ${error}`);
    //   }
    // },
  },
};
</script>
