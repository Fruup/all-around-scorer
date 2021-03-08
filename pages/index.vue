<template>
  <div class="container">
    <header class="title">All Around Scorer</header>

    <main class="content">
      <ul class="posts">
        <li v-for="post in posts" :key="post.index">
          <PostCard :post="post" />
        </li>
      </ul>

      <div v-if="isDev">
        <p style="margin: 2rem 0; font-size: 1.5rem">Beispielposts (nur angezeigt während Development)</p>
        <ul class="posts">
          <li v-for="post in examples" :key="post.index">
            <PostCard :post="post" />
          </li>
        </ul>
      </div>
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },

  computed: {
    isDev() {
      return process.env.NODE_ENV !== 'production'
    }
  },

  async asyncData({ $content }) {
    // fetch blog posts
    let posts = await $content({ deep: true })
      .only(['title', 'slug', 'date', 'excerpt'])
      .where({ example: { $ne: true } })
      .fetch()

    let examples = await $content({ deep: true })
      .only(['title', 'slug', 'date', 'excerpt'])
      .where({ example: { $eq: true } })
      .fetch()

    // sort posts by date (nuxt content sort did not work)
    posts = posts.sort(function(a, b) {
      if (a.date === undefined) {
        a = new Date(0)
      } else {
        a = a.date.split('.')
        a = new Date(a[2], a[1], a[0])
      }
      
      if (b.date === undefined) {
        b = new Date(0)
      } else {
        b = b.date.split('.')
        b = new Date(b[2], b[1], b[0])
      }

      return b.getTime() - a.getTime()
    })

    // return data
    return {
      posts,
      examples
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
