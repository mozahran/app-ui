<template>
  <button class="mx-2 px-2 py-1 outline-none border-none rounded focus:outline-none"
          :class="{[type]: type, [`text-${size}`]: size}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Default",
  props: {
    size: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style>
@import "tailwindcss/base.css";
@import "tailwindcss/components.css";
@import "tailwindcss/utilities.css";

@layer components {
  .default {
    @apply bg-gray-200 active:bg-gray-200 hover:bg-gray-300
  }
  .success {
    @apply text-white bg-green-600 active:bg-green-400 hover:bg-green-500
  }

  .danger {
    @apply text-white bg-red-500 active:bg-red-400 hover:bg-red-700
  }

  .primary {
    @apply text-white bg-blue-500 active:bg-blue-400 hover:bg-blue-600
  }

  .warning {
    @apply text-white bg-orange-500 active:bg-orange-400 hover:bg-orange-600
  }
}
</style>