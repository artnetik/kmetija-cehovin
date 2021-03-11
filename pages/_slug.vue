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
        :date="post.createdAt"
      >
        <nuxt-content :document="post" />
      </NewsPost>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, $router }) {
    const slug = params.slug || 'kmetija'
    const page = await $content().where({ slug }).fetch().then(data => data[0])
    const blocks = await $content(`${slug}/blocks`)
      .sortBy('order', 'asc')
      .fetch()
      .catch(() => {
        return { blocks: [] }
      })
    const news = await $content('novice').fetch()
      .catch(() => {
        return { news: [] }
      })
    return { blocks, page, news }
  }
}
</script>

<style lang="scss">
  .logos {
    max-width: 800px;
    margin: 1.5rem auto;

    img {
      max-width: 100%;
    }
  }
</style>
