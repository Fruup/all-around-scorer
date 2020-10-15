<template>
  <div class='container'>
    <header class='title'>All Around Scorer</header>

    <main class='content'>
      <ul class='posts'>
        <li v-for="post in posts" :key="post.index">
          <PostCard :post='post' />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import PostCard from '~/components/global/PostCard'

export default {
  components: {
    PostCard,
  },

  head() {
    return {
      title: 'All Around Scorer',
    }
  },

  async asyncData({ $content }) {
    // fetch blog posts
    const posts = await $content({ deep: true })
      .only(['title', 'slug', 'date', 'excerpt'])
      .fetch()

    // return data
    return {
      posts,
    }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  
  text-align: center;

  a {
    color: black;
    text-decoration-color: $accent-color;
  }

  a:hover {
    color: $accent-color;
  }
}

.content {
  margin: auto;
  width: $sm-bp;

  padding: 0 1rem;

  padding-bottom: 3rem;

  @media screen and (max-width: $sm-bp) {
    width: 100vw;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
}

.title {
  margin: auto;

  font-family: 'Open Sans';

  display: block;
  font-weight: 300;
  font-size: 100px;
  color: rgb(39, 39, 39);
  letter-spacing: 1px;
}
</style>
