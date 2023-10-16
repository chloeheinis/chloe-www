<template>
  <transition name="page">
    <div>
      <section class="heading">
        <h1>{{ project.title }}</h1>
        <ul class="filters">
          <div class="filters-shading first"></div>
          <li v-for="filter of project.filter"> 
            <NuxtLink :to="localePath(`/filters/${filter}`)">
                {{ $t('filters.' + filter) }}
            </NuxtLink>
          </li>
          <div class="filters-shading last"></div>
        </ul>
      </section>
        <nuxt-picture :src="project.slug +'1.jpg'" :alt="project.alt[0]"/>
        <section class="grid grid--2">
          <h2>{{ project.h2 }}</h2>
          <nuxt-content class="project-content" :document="project" />
        </section>
        <section v-for="(alt, index) of project.alt" v-if="index>=1">
          <nuxt-picture :src="project.slug + parseInt(index+1) + '.jpg'" :alt="alt"/>
        </section>
        <Next :next="next" />
    </div>
  </transition>
</template>

<script>

export default {
  head() {
    return {
      title: this.project.title + ' – Chloé Heinis',
      meta: [
        { 
          hid: 'ogtitle',
          property:'og:title', 
          content: this.project.title
        },
        { 
          hid: 'ogimage',
          property:'og:image', 
          content:'https://chloeheinis.fr/' + this.project.slug + '1.png' 
        },
        { 
          hid: 'ogdescription',
          property:'og:description', 
          content:this.project.description },
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        }
      ]
    }
  },
  async asyncData({ $content, params, app }) {
    const project = await $content(app.i18n.locale, 'projects', params.slug).fetch()
    
    const [next] = await $content(app.i18n.locale, 'projects')
      .only(['title', 'slug'])
      .sortBy('order', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      next
    }
  }
}
</script>