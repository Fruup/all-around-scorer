<template>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.index">
        <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  head() {
    return {
      title: 'All Around Scorer',
    }
  },

  async asyncData({ $content }) {
    // fetch blog posts
    const posts = await $content({ deep: true }).only(['title', 'slug', 'date']).fetch()

    // return data
    return {
      posts,
    }
  },
}
</script>

<style lang="scss">
// DEFINITIONS
$link-accent-color: rgb(89, 89, 255);

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  a {
    color: black;
    text-decoration-color: $link-accent-color;
  }

  a:hover {
    color: $link-accent-color;
  }
}

.title {
  font-family: 'Open Sans';
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
