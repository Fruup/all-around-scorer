<!--
This is the page for a single blog post
-->

<template>
  <div id="blog-post">
    <div id="progress-bar"></div>

    <header>
      <HomeButton />

      <div id="head">
        <h1>{{ post.title }}</h1>
        <span id="date">{{ dateString }}</span>
      </div>
    </header>

    <article>
      <nuxt-content :document="post" />

      <div id="back-to-home">
        <nuxt-link to="/">Zurück zur Startseite -></nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import HomeButton from '~/components/HomeButton'

export default {
  components: [HomeButton],

  head() {
    return {
      title: this.post.title,
      meta: [
        // TODO: insert post description etc.
      ],
    }
  },

  async asyncData({ $content, params }) {
    // fetch blog post with slug
    const posts = await $content({ deep: true })
      .where({ slug: params.slug })
      .fetch()

    // return first match (should be only one)
    return {
      post: posts[0],
    }
  },

  mounted() {
    // TODO: assign width classes to elements of the article.
    /*
    100%: p
    66%: img
    */

    /** TODO
     * All <img> tags are inside of a <p> tag.
     * Mark all <p> tags with an <img> tag inside them
     * as 'text-align: center'.
     */

    // listen to scroll events
    var updateScrollBar = () => {
      // get scroll percentage
      var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
      var scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)

      // set width of progress bar
      document.getElementById('progress-bar').style.width = scroll * 100 + 'vw'
    }

    window.addEventListener('scroll', updateScrollBar)
    updateScrollBar()
  },

  computed: {
    dateString() {
      const s = new Date(this.post.createdAt).toLocaleString()
      return s.slice(0, s.indexOf(','))
    },
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap);

$progress-bar-height: 4px;

#progress-bar {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;

  background-color: rgb(109, 109, 109);

  width: 0vw;
  height: $progress-bar-height;
}

#blog-post {
  text-align: center;
  font-size: 1.2rem;
  padding: 0 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald', serif;
    font-weight: 600;

    margin-top: 1.5rem;
  }
}

header {
  margin-top: $progress-bar-height;
  width: 100%;

  h1 {
    margin-top: 0;
    font-size: 4rem;
  }

  #head {
    font-family: 'Oswald', serif;

    padding-bottom: 1rem;
    border-bottom: 1px solid black;

    width: 100%;
    margin: 2rem auto;

    #date {
      color: grey;
      font-size: 0.9em;
      font-weight: 300;
      margin-left: 20px;
    }
  }
}

article {
  margin: auto;
  padding: 0;

  padding-bottom: 3rem;

  width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    text-align: left;
  }

  h1 {
    margin-left: 0;
  }

  h2 {
    margin-left: 0.5rem;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-left: 1rem;
  }

  hr {
    margin: 1rem auto;
    border: 1px solid rgb(100, 100, 100);
    border-radius: 2px;
  }

  text-align: center;

  p {
    text-align: left;
    line-height: 1.6rem;
  }

  p,
  blockquote {
    margin-top: 1rem;
  }

  figcaption {
    color: grey;
    font-size: 0.9rem;
    margin-left: 10%;
  }

  blockquote {
    border-left: 2px solid rgb(36, 36, 255);
    padding-left: 0.5rem;
  }

  img {
    margin: auto;
    padding: 0;

    width: 66%;
    min-width: 66%;
    max-width: 100%;
  }
}

#back-to-home {
  margin-top: 3rem;
  width: 100%;
  text-align: right;
}
</style>
