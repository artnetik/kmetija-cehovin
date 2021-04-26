<template>
  <div>
    <Intro :body="page" :photo="page.photo">
      <h1>{{ page.title }}</h1>
    </Intro>
    <div v-if="page.menu === 'Novice'">
      <NewsPost
        v-for="post in news"
        :key="post.id "
        :title="post.title"
        :photo="post.photo"
        :date="post.slug"
      >
        <nuxt-content :document="post" />
      </NewsPost>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'kmetija'
    const page = await $content()
      .where({ slug })
      .fetch().then(data => data[0])

    const news = await $content('novice')
      .sortBy('slug', 'desc')
      .fetch()
      .catch(() => { return { news: [] } })
    return { page, news }
  }
}
</script>

<style lang="scss">
  .logos {
    max-width: 800px;
    margin: 1.5rem auto;
    padding: 0 1rem;

    img {
      max-width: 100%;
    }
  }
</style>
