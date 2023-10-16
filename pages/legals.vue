<template>
    <div>
      <section class="heading">
        <h1>{{ $t('legals.h1') }}</h1>
      </section>
      <section v-for="(legals,index) of $t('legals.text')">
        <h4>{{ (index+1) + " – " + legals.title }}</h4>
        <p v-for="content of legals.content">
          {{ content }}
        </p>
      </section>
    </div>
</template>

<script>

export default {
  head() {
    return {
      title: this.$t('legals.h1') + '–Chloé Heinis'
    }
  }
}
</script>