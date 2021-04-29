<template>
  <div class="detail bg-cream-light h-screen">
    <div class="">
      <!-- <div class="p-40">{{ eiei }}</div> -->
      <base-detail-product></base-detail-product>
    </div>
  </div>
</template>

<script>
import BaseDetailProduct from "../components/BaseDetailProduct.vue";
export default {
  components: { BaseDetailProduct },
  data() {
    return {
      //   eiei: "",
    };
  },
  //   created() {
  //     const queryString = window.location.search;
  //     const urlParams = new URLSearchParams(queryString);
  //     const id = urlParams.get("id");
  //     this.eiei = id;
  //   },
};
</script>
