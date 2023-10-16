<template>
  <section class="heading">
    <h1>{{ $t('contact.h1')}} <a href="mailto:chloe.heinis@gmail.com">email</a></h1>
  </section>
</template>
©
<script>
export default {
  head() {
    return {
      title: this.$t('contact.title') + '– Chloé Heinis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.content')
        }
      ]
    }
  },
}
</script>
