<script setup>
</script>

<template>
  <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
      <button
          class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button">
        <i class="fas fa-bars"></i>
      </button>
      <a href="/"
         class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mohassib</a>
      <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden">
        <hr class="my-4 md:min-w-full">
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link to="/"
                         class="text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600">
              <i class="fas fa-tv mr-2 text-sm opacity-75"></i> Dashboard
            </router-link>
          </li>
          <li class="items-center">
            <a href="/settings"
               class="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">
              <i class="fas fa-tools mr-2 text-sm text-blueGray-300"></i> Settings</a>
          </li>
        </ul>
        <hr class="my-4 md:min-w-full">
        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Inventories</h6>
        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <a href="/items/create"
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-2 font-bold block">
              <i class="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i> Create Item</a>
          </li>
          <li class="items-center">
            <a href="/item-categories/create"
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-2 font-bold block">
              <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Create Item Category
            </a>
          </li>
          <li class="items-center">
            <router-link to="/inventories/create"
                         class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-2 font-bold block">
              <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Create Inventory
            </router-link>
          </li>
          <li class="items-center">
            <router-link to="/inventories"
                         class="text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600">
              <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Browse Inventories
            </router-link>
          </li>
          <li class="items-center">
            <a href="/items"
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-2 font-bold block">
              <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Browse Items
            </a>
          </li>
          <li class="items-center">
            <a href="/item-categories/"
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-2 font-bold block">
              <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Browse Categories
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="relative md:ml-64 bg-blueGray-100">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
