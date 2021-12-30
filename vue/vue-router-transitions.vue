<template>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: 'ComponentName'
}
</script>

<style scoped>
.route-enter-active {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
