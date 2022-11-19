<template>
  <h1 class="py-5 px-5">
    <router-link to="/inventories" class="bg-indigo-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Go Back</router-link>
    Create Inventory
  </h1>
  <input type="text">
  <hr>
  <input type="date">
</template>

<script>
export default {
  name: "CreateInventory"
}
</script>

<style scoped>

</style>