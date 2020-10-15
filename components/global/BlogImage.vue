<template>
  <p>
    <img
      :style="{ width: (this.width || 66).clamp(0, 100) + '%' }"
      :src='require("~/assets/img/" + src)'
      :alt="alt"
    />
  </p>
</template>

<script>
// define clamp function for numbers
Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max)
}

export default {
  props: {
    src: String,
    alt: String,
    width: Number,
  },
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;

  img {
    margin: auto;
  }
}
</style>
