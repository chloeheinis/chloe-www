<template>
  <div>
    <section class="heading">
      <h1>{{ $t('info.h1')}}</h1>
      <h2>{{ $t('info.h2')}}</h2>
    </section>
    <section>
      <p>{{ $t('info.paragraph-1')}}</p>
    </section>
    <section>
      <h3>{{ $t('info.weworkwith')}}</h3>
      <p>{{ $t('info.paragraph-2')}}</p>
    </section>
    <section>
      <h3>{{ $t('info.whatwedo')}}</h3>
      <p>{{ $t('info.paragraph-3')}}</p>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('info.title') + '– Chloé Heinis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('info.content')
        }
      ]
    }
  },
}
</script>
