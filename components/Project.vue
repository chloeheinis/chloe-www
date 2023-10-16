<template>
  <div class="image-container">
    <NuxtLink :to="localePath('/' + slug)">
      <nuxt-picture :src="slug + img + '.jpg'" :alt="alt"/>
    </NuxtLink>
    <div class="image-background"></div>
  </div>
</template>
<script>
export default {
  props: {'slug': {default:''}, 'title': {default:''}, 'img': {default:1}, 'alt': {default:''}},
}
</script>