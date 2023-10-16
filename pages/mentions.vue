<template>
    <div>
      <section class="heading">
        <h1>{{ $t('mentions.h1') }}</h1>
      </section>
      <p v-for="text of $t('mentions.mention')">
        {{ text }}
      </p>
      <p> {{currentDate.getFullYear()}}</p>
    </div>
</template>

<script>

export default {
  head() {
    return {
      title: this.$t('mentions.h1') + '–Chloé Heinis'
    }
  },
  data(){
     return {
        currentDate: new Date,
        }
 }
}
</script>