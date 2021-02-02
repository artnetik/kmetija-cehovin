<template>
  <div>
    <Intro :body="page" :photo="page.photo">
      <h1>{{ page.title }}</h1>
    </Intro>
    <div v-if="blocks.length">
      <ImageBlock
        v-for="(block, i) in blocks"
        :key="block.id"
        :title="block.title"
        :icon="block.icon"
        :photo="block.photo"
        :bg="block.bg"
        :position="block.position"
        :reverse="i % 2 ? true : false"
      >
        <nuxt-content :document="block" />
      </ImageBlock>
    </div>
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
    <Kontakt v-if="page.menu === 'Kontakt'" />
    <Footer />
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params, $router }) {
    const slug = params.slug || 'kmetija'
    const page = await $content(slug).fetch().then(data => data[0])
    const blocks = await $content(`${slug}/blocks`)
      .sortBy('order', 'asc')
      .fetch()
      .catch(() => {
        return { blocks: [] }
      })
    const news = await $content('novice/objave').fetch()
      .catch(() => {
        return { news: [] }
      })
    return { blocks, page, news }
  }
}
</script>
