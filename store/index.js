export const state = () => ({
  links: []
})

export const mutations = {
  setLinks (state, links) {
    state.links = links
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $content }) {
    const links = await $content({ deep: true })
      .where({ slug: 'index' })
      .without(['body'])
      .sortBy('id', 'des')
      .fetch()
    commit('setLinks', links)
  }
}
