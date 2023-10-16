<template>
    <div>
      <section class="heading">
        <h1>
          <span>{{ $t('index.h1.first') }}</span>
          <span>{{ $t('index.h1.second') }}</span>
        </h1> 
        <h3>{{ $t('index.h3') }}</h3>
      </section>
      <section class="grid grid--2">
        <div>
          <div v-for="project of list.slice(0, 3)">
            <Project :slug="project.slug" :img="'1'" :alt="project.alt[1]"></Project>
          </div>
        </div>
        <div>
          <div v-for="project of list.slice(3, 6)">
            <Project :slug="project.slug" :img="'1'" :alt="project.alt[1]"></Project>
          </div>
        </div>
      </section>
      <section class="button">
        <NuxtLink :to="localePath('design')">{{ $t('index.button') }}</NuxtLink>

      </section>
    </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Chloé Heinis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index.content')
        }
      ]
    }
  },
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