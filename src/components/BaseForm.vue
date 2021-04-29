<template>
  <div class="form bg-cream-light pt-5 pb-8 h-screen">
    <form class="w-5/6 xl:w-2/3 2xl:w-3/5 mx-auto">
      <base-card class="w-full mx-auto">
        <!-- <base-product-hor @edit-hor="editForm"></base-product-hor> -->
        <!-- <base-product-ver @edit-ver="editForm"></base-product-ver> -->
        <p
          class="font-serif text-center text-cream-dark lg:text-4xl text-3xl font-bold lg:pt-10 pt-5 lg:pb-10 pb-5"
        >
          Add Product
        </p>

        <div class="flex flex-row 2xl:space-x-14 xl:space-x-24 lg:space-x-16">
          <div class="space-y-5 flex flex-col 2xl:ml-24 xl:ml-20 lg:ml-16 ">
            <img :src="image" class="w-80" />
            <input
              type="file"
              :class="{}"
              class="font-serif mx-auto w-52 focus:outline-none"
              @change="uploadImg"
            />

            <div v-if="UpPic" class="font-serif text-center text-red-500">
              Please upload your Product Images!
            </div>

            <div class="flex flex-row justify-center mx-auto space-x-2">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark1"></span>
              </label>

              <label class="container">
                <input type="checkbox" />
                <span class="checkmark2"></span>
              </label>

              <label class="container">
                <input type="checkbox" />
                <span class="checkmark3"></span>
              </label>

              <label class="container">
                <input type="checkbox" />
                <span class="checkmark4"></span>
              </label>
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
                id="name"
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
                id="name"
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
                id="name"
                type="text"
                placeholder="Price"
                v-model.trim="enterPrice"
              />
            </div>

            <p v-if="PriceInput" class="font-serif text-red-500">
              Please enter your Price!
            </p>

            <div class="flex flex-col">
              <label class="font-serif lg:text-lg text-base"
                >Description:
              </label>

              <textarea
                class="input font-serif w-full h-20 mt-1 py-1 px-4 rounded-sm bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
                :class="{ 'bg-red-50': DescriptInput }"
                id="name"
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
              @click="clearForm"
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
  props: [],
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
      this.PriceInput = this.enterPrice === "" ? true : false;
      this.DescriptInput = this.enterDescript === "" ? true : false;
    },
    clearForm() {
      (this.image = require("../assets/icon/clothes-hanger.svg")),
        (this.enterBrand = ""),
        (this.enterProName = ""),
        (this.enterDate = ""),
        (this.enterPrice = ""),
        (this.enterDescript = "");
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
        !this.DescriptInput
      ) {
        this.$emit("add-form", {
          proPathImg: this.image,
          brandName: this.enterBrand,
          proName: this.enterProName,
          proDescription: this.enterBrand,
          proPrice: this.enterPrice,
          proMFDDATE: this.enterDate,
        });
        this.clearForm();
        alert("Your product is add already.");
      }
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    async fetch() {
      const res = await fetch("http://localhost:5000/brand"); //อ่านไฟล์jsonจากpathที่เราใส่
      const data = await res.json(); //เอาไฟล์jsonจากpathเราใส่มาแปลงเป็น javascript object
      return data;
    },
  },
  async created() {
    this.brandArray = await this.fetch(); //เอาjava script object ที่แปลงมาจาก method fetch มาเก็บไว้ในตัวแปรposArrayที่เราสร้าง
  },
};
</script>

<style>
/* @media screen and (max-width: 640px) and (max-width: 768px) and (max-width: 1024px) and (max-width: 1280px) and (max-width: 1536px) {
  input[type="text"],
  input[type="file"],
  input[type="checkbox"],
  select,
  textarea {
    width: 100%;
    margin-top: 0;
  }
} */
/* @media screen and (max-width: 1024px){
  input[type="text"],
  input[type="file"],
  input[type="checkbox"],
  select,
  textarea {
    width: 100%;
    margin-top: 0;
  }
} */
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark1 {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 0.125rem;
  background-color: #063970;
}

.checkmark2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 0.125rem;
  background-color: #1e81b0;
}

.checkmark3 {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 0.125rem;
  background-color: #76b5c5;
}

.checkmark4 {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 0.125rem;
  background-color: #abdbe3;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark1,
.container:hover input ~ .checkmark2,
.container:hover input ~ .checkmark3,
.container:hover input ~ .checkmark4 {
  border-style: solid;
  border-color: black;
  border-width: 1px;
  /* background-color: #ccc; */
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark1 {
  background-color: #063970;
}
.container input:checked ~ .checkmark2 {
  background-color: #1e81b0;
}

.container input:checked ~ .checkmark3 {
  background-color: #76b5c5;
}

.container input:checked ~ .checkmark4 {
  background-color: #abdbe3;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark1:after,
.checkmark2:after,
.checkmark3:after,
.checkmark4:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark1:after,
.container input:checked ~ .checkmark2:after,
.container input:checked ~ .checkmark3:after,
.container input:checked ~ .checkmark4:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark1:after,
.container .checkmark2:after,
.container .checkmark3:after,
.container .checkmark4:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  /* border: solid white; */
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
