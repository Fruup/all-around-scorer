<template>
  <nuxt-link class='post-link' :to="post.slug">
    <div class='post-card'>
      <div class='post-meta'>
        <span class='post-title'>{{ post.title }}</span>
        <span class='post-date'>{{ post.date }}</span>
      </div>
      <span class='post-excerpt'>{{ post.excerpt }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [ 'post' ],
}
</script>

<style lang='scss'>
// DEFINITIONS
$link-accent-color: rgb(89, 89, 255);
$bp: 470px;

.post-link {
  text-decoration: none;
}

.post-card {
  text-align: left;

  border: 1px solid transparent;

  width: 100%;

  margin: 1rem 0;
  padding: 1rem 1.5rem;

  box-shadow: 1px 2px 2px 2px rgba(0,0,0,.2);
  border-radius: 6px;

  .post-meta {
    margin-bottom: .8rem;

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: $bp) {
      flex-direction: column;
    }
  }

  .post-date, .post-title {
    align-self: flex-end;

    @media screen and (max-width: $bp) {
      align-self: flex-start;
    }
  }

  .post-date {
    color: grey;
    margin-bottom: .2rem;
  }

  .post-title {
    font-family: 'Oswald';
    font-size: 1.5rem;

    text-decoration: underline;
    text-decoration-color: $link-accent-color;

    @media screen and (max-width: $bp) {
      margin-bottom: .5rem;
    }
  }

  .post-excerpt {
    text-align: left;

    color: rgb(56, 56, 56);
    font-size: 1rem;
  }
}

.post-card:hover {
  border-color: grey;
}
</style>
