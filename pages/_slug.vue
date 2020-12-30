<template>
  <div>
    <Intro :body="page" :photo="page.photo">
      <Menu />
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
    <Kontakt v-if="page.title === 'Kontakt'" />
    <Footer />
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params, $router }) {
    const param = params.slug || 'kmetija'
    const page = await $content(param).fetch().then(data => data[0])
    const blocks = await $content(`${param}/blocks`)
      .sortBy('order', 'asc')
      .fetch()
      .catch(() => {
        return { blocks: [] }
      })
    return { blocks, page }
  }
}
</script>
