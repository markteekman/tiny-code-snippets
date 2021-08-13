<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: ComponentName,
  props: {
    text: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>

<style lang="scss">
p {
  font-size: 1em;
  line-height: 1.1em;
}
</style>
