<template>
  <div class="next-project">
    <NuxtLink
      v-if="next"
      :to="localePath({ name: 'slug', params: { slug: next.slug } })"
    >
      {{ $t('next.next') }}
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>