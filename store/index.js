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
    const links = await $content()
      .only(['path', 'menu', 'icon', 'id'])
      .sortBy('id', 'des')
      .fetch()
    commit('setLinks', links)
  }
}
