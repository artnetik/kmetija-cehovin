<template>
  <div>
    <Intro :body="page" :photo="page.photo">
      <Menu />
      <h1>{{ page.title }}</h1>
    </Intro>
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
    <Footer />
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const param = params.slug || 'kmetija'
    const page = await $content(param).fetch().then(data => data[0])
    const blocks = await $content(`${param}/blocks`)
      .sortBy('order', 'asc')
      .fetch()
    return { blocks, page }
  }
}
</script>
