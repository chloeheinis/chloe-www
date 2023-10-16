<template>
    <div>
      <section class="heading">
        <h1>{{ $t('design.h1') }}</h1>
        <FiltersList />
      </section>
      <section class="grid grid--3">
        <div>
          <div v-for="project of list.slice(0, slicer(col))">
            <Project :if="project" :slug="project.slug" :img="'1'" :alt="project.alt[1]"></Project>
          </div>
        </div>
        <div>
          <div v-for="project of list.slice(slicer(col), slicer(col)*2)">
            <Project :if="project" :slug="project.slug" :img="'1'" :alt="project.alt[1]"></Project>
          </div>
        </div>
        <div>
          <div v-for="project of list.slice(slicer(col)*2, slicer(col)*3)">
            <Project :if="project" :slug="project.slug" :img="'1'" :alt="project.alt[1]"></Project>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  data() {
    return {
      col: 3
    }
  },
  head() {
    return {
      title: this.$t('design.title') + '– Chloé Heinis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('design.content')
        }
      ]
    }
  },
  methods: {
    slicer() {
      return Math.ceil((this.list.length -1)/this.col)
    }
  },
  scrollToTop: true,
  async asyncData({ $content, app }) {
    const list = await $content(app.i18n.locale,'projects')
      .only(['title', 'slug', 'alt'])
      .sortBy('order', 'asc')
      .fetch()

    return {
      list
    }
  }
}
</script>