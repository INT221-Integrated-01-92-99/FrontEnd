<template>
  <div class="hello">
    <h1 class="font-serif font-medium 2xl:text-7xl xl:text-6xl text-5xl text-white tracking-widest">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ShopName',
  props: {
    msg: String
  }
}
</script>