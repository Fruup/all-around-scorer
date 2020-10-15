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

      <hr />
    </header>

    <transition name="fade">
      <article>
        <nuxt-content :document="post" />

        <div id="back-to-home">
          <nuxt-link to="/">Zurück zur Startseite -></nuxt-link>
        </div>
      </article>
    </transition>
  </div>
</template>

<script>
import HomeButton from '~/components/global/HomeButton'
import Logo from '~/components/global/Logo'
import BlogImage from '~/components/global/BlogImage'

var components = {
  HomeButton,
  Logo,
  BlogImage,
}

export default {
  components,

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

    // All <img> tags are inside of a <p> tag.
    // Mark all <p> tags with an <img> tag inside them
    // as 'text-align: center'.
    const content = document.getElementsByClassName('nuxt-content')[0]
    content.querySelectorAll('p img').forEach((e) => {
      e.parentElement.classList += 'img-paragraph'
    })

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
      return this.post.date || s.slice(0, s.indexOf(','))
    },
  },
}
</script>

<style lang="scss">
// DEFINITIONS
$progress-bar-height: 4px;

#progress-bar {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;

  background-color: rgb(65, 65, 65);

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
    font-family: 'Oswald';
    font-weight: 600;

    margin-top: 1.5rem;
  }

  hr {
    height: 1px;
    width: 100%;

    margin: 2rem auto;

    border: none;
    color: black;
    background-color: black;
  }

  ol,
  ul {
    text-align: left;
  }

  .img-paragraph {
    text-align: center;
  }

  a {
    color: black;
    text-decoration-color: $accent-color;
  }

  a:hover {
    color: $accent-color;
  }
}

header {
  line-height: 1.2; // relative to font height

  margin-top: $progress-bar-height;
  width: 100%;

  h1 {
    margin-top: 0;
    font-size: 4rem;
  }

  #head {
    font-family: 'Oswald';

    width: 100%;
    margin: 2rem auto;

    h1 {
      margin-bottom: .5rem;
    }

    #date {
      color: grey;

      font-size: 0.9em;
      font-weight: 300;
    }
  }

  hr {
    position: relative;
    left: 0;
    animation: 1s 'draw-line';
    animation-timing-function: cubic-bezier(0.52, 0.34, 0.15, 1);
  }

  @keyframes draw-line {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
}

article {
  line-height: 1.6;
  text-align: left;

  margin: auto;
  padding: 0;

  padding-bottom: 3rem;

  width: $sm-bp;

  @media screen and (max-width: $sm-bp) {
    width: 100%;
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

  p {
    line-height: 1.6rem;
  }

  p,
  blockquote,
  ol,
  ul {
    margin-top: 1rem;
  }

  blockquote {
    color: lighten(black, 20%);
    font-style: italic;

    border-left: 2px solid $accent-color;
    border-radius: 2px;
    padding-left: 0.5rem;
  }

  img {
    margin: auto;
    padding: 0;

    //width: 66%;
    width: 100%;

    border: 1px solid rgba(0, 0, 0, 0.308);
  }
}

#back-to-home {
  margin-top: 3rem;
  width: 100%;
  text-align: right;
}
</style>
