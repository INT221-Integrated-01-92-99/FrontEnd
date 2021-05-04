<template>
  <div class="form bg-cream-light pt-5 pb-8 h-screen">
    <form class="w-5/6 xl:w-3/4 2xl:w-3/5 mx-auto">
      <base-card class="w-full mx-auto">
        <p
          class="font-serif text-center text-cream-dark lg:text-4xl text-3xl font-bold lg:pt-10 pt-5 lg:pb-10 pb-5"
        >
          {{ proId == "add" ? "Add Product" : "Edit Product" }}
        </p>
        <div
          class="flex flex-row 2xl:space-x-14 xl:space-x-28 lg:space-x-16 xl:max-w-full"
        >
          <div class="space-y-5 flex flex-col 2xl:ml-24 xl:ml-20 lg:ml-16">
            <img :src="image" class="w-80" />
            <input
              type="file"
              :class="{}"
              class="font-serif mx-auto 2xl:w-52 xl:w-full focus:outline-none"
              @change="uploadImg"
            />

            <div v-if="UpPic" class="font-serif text-center text-red-500">
              Please upload your Product Images!
            </div>
            <div class="flex flex-row flex-wrap overflow-auto justify-center">
              <div
                @click="selectColor(color)"
                v-for="color in colorArray"
                :key="color.colId"
                class="flex justify-center items-center w-6 h-6 rounded-sm border hover:border-black m-2 cursor-pointer"
                v-bind:style="{ backgroundColor: color.colorCode }"
              ></div>
              <div
                class="font-serif text-center text-red-500 mt-2"
                v-if="ChooseColor"
              >
                Please select color!
              </div>
            </div>
          </div>
          <div class="lg:space-y-3 space-y-4 flex flex-col pl-10">
            <div class="flex flex-col">
              <label class="label font-serif lg:text-lg text-base" for="brands"
                >Brand:</label
              >
              <select
                id="brands"
                name="brandlist"
                form="brandform"
                v-model="enterBrand"
                :class="{ 'bg-red-50': BrandInput }"
                class="input font-serif w-full mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
              >
                <option v-for="brand in brandArray" :key="brand.id">
                  {{ brand.brandName }}
                </option>
              </select>
            </div>
            <p v-if="BrandInput" class="font-serif text-red-500">
              Please select the Brand!
            </p>
            <div class="flex flex-col">
              <label class="font-serif lg:text-lg text-base"
                >Product Name:
              </label>
              <input
                class="input font-serif w-full mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
                :class="{ 'bg-red-50': ProInput }"
                id="proName"
                type="text"
                size="32"
                placeholder="Product Name"
                v-model.trim="enterProName"
              />
            </div>
            <p v-if="ProInput" class="font-serif text-red-500">
              Please enter your Product Name!
            </p>

            <div class="flex flex-col">
              <label class="font-serif lg:text-lg text-base"
                >Manufactured Date:
              </label>
              <input
                class="input font-serif w-full mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
                :class="{ 'bg-red-50': MFDInput }"
                id="date"
                type="date"
                v-model.trim="enterDate"
              />
            </div>
            <p v-if="MFDInput" class="font-serif text-red-500">
              Please select the Manufactured Date!
            </p>
            <div class="flex flex-col">
              <label class="font-serif lg:text-lg text-base">Price: </label>
              <input
                class="input font-serif w-full mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
                :class="{ 'bg-red-50': PriceInput }"
                id="price"
                type="text"
                placeholder="Price"
                v-model.trim="enterPrice"
              />
            </div>
            <p v-if="PriceInput" class="font-serif text-red-500">
              Please enter your Price! (Do not use decimal number and negative
              integer)
            </p>

            <div class="flex flex-col">
              <label class="font-serif lg:text-lg text-base"
                >Description:
              </label>
              <textarea
                class="input font-serif w-full h-20 mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
                :class="{ 'bg-red-50': DescriptInput }"
                id="descript"
                placeholder="Desciption"
                v-model.trim="enterDescript"
              />
            </div>
            <p v-if="DescriptInput" class="font-serif text-red-500">
              Please enter the Description!
            </p>
          </div>
        </div>
        <div
          class="flex justify-end lg:pb-11 pb-7 lg:pt-10 pt-7 2xl:pr-24 xl:pr-20 pr-16"
        >
          <div class="space-x-5">
            <base-button
              @click.prevent="submitForm"
              class="font-serif py-1 lg:text-base text-sm 2xl:px-11 xl:px-11 px-11 rounded-sm hover:bg-green-600 hover:text-white"
              bgcolor="bg-green-500"
              txtcolor="text-white"
              txtbutt="Add"
            ></base-button>
            <base-button
              @click.prevent="clearForm, this.$router.push('/product/views')"
              class="font-serif lg:text-base text-sm py-1 2xl:px-9 xl:px-9 px-9 rounded-sm hover:bg-red-700 hover:text-white"
              bgcolor="bg-red-600"
              txtcolor="text-white"
              txtbutt="Cancel"
            ></base-button>
          </div>
        </div>
      </base-card>
    </form>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  emits: ["add-form"],
  props: ["pro-id"],
  data() {
    return {
      image: require("../assets/icon/clothes-hanger.svg"),
      brandArray: [],
      enterBrand: "",
      enterProName: "",
      enterDate: "",
      enterPrice: "",
      enterDescript: "",
      UpPic: false,
      BrandInput: false,
      ProInput: false,
      MFDInput: false,
      PriceInput: false,
      DescriptInput: false,
      ChooseColor: false,
      colorArray: [],
      product: {
        colorList: [],
      },
    };
  },
  methods: {
    checkForm() {
      this.UpPic =
        this.image == require("../assets/icon/clothes-hanger.svg")
          ? true
          : false;
      this.BrandInput = this.enterBrand === "" ? true : false;
      this.ProInput = this.enterProName === "" ? true : false;
      this.MFDInput = this.enterDate === "" ? true : false;
      this.PriceInput =
        this.enterPrice === "" ||
        this.enterPrice % 1 != 0 ||
        this.enterPrice < 0;
      this.DescriptInput = this.enterDescript === "" ? true : false;
      this.ChooseColor = this.product.colorList.length === 0 ? true : false;
    },
    clearForm() {
      (this.image = require("../assets/icon/clothes-hanger.svg")),
        (this.enterBrand = "");
      this.enterProName = "";
      this.enterDate = "";
      this.enterPrice = "";
      this.enterDescript = "";
      this.product = {
        colorList: [],
      };
    },
    submitForm() {
      this.checkForm();
      if (
        // this.image !== require("../assets/icon/clothes-hanger.svg")&&
        !this.UpPic &&
        !this.BrandInput &&
        !this.ProInput &&
        !this.MFDInput &&
        !this.PriceInput &&
        !this.DescriptInput &&
        !this.ChooseColor
      ) {
        const addPro = {
          proPathImg: this.image,
          brandName: this.enterBrand,
          proName: this.enterProName,
          proDescription: this.enterDescript,
          proPrice: this.enterPrice,
          proMFDDATE: this.enterDate,
          proCol: this.product.colorList,
        };

        this.$parent.regist(addPro);
        alert("Your product is add already.");
      }
      this.clearForm();
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    selectColor(color) {
      if (this.product.colorList.map((c) => c.colId).includes(color.colId)) {
        this.product.colorList = this.product.colorList.filter(
          (c) => c.colId != color.colId
        );
      } else {
        this.product.colorList.push(color);
      }
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    console.log(this.proId);
    this.brandArray = await this.fetch("http://localhost:5000/brand");
    this.colorArray = await this.fetch("http://localhost:5000/colors");

    if (!isNaN(this.proId)) {
      const product = await this.fetch(
        "http://localhost:5000/product/" + this.proId
      );

      // ^^path backend
      this.image = product.proPathImg;
      this.enterBrand = product.probrandName;
      this.enterProName = product.proName;
      this.enterDescript = product.proDescription;
      this.enterPrice = product.proPrice;
      this.enterDate = product.proMFDDATE;
      this.product.colorList = product.proCol;
    }
  },
  watch: {
    proId: function clearEditToAdd() {
      this.clearForm();
    },
  },
};
</script>
