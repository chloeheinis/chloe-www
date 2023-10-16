<template>
  <div>
      <section class="heading">
        <h1>{{$t('filters.' + $route.params.filter)}}</h1>
        <FiltersList />
      </section>
      <section>
        <div v-for="project in projects" :key="project.slug">
          <Project :slug="project.slug"></Project>
        </div>
      </section>
  </div>
</template>
<script>
  export default {
    async asyncData({ $content, params, app }) {
      const projects = await $content(app.i18n.locale, 'projects', params.slug)
        .where({
          'filter': {
            $regex: [params.filter, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        projects,
      }
    }
  }
</script>