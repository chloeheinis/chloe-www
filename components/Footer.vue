<template>
  <footer>
    <div class="footer-grid container">
      <div class="footer__row__info">
        <a target="_blank" href="https://www.instagram.com/chloe_heinis_studio/">Instagram</a>
        <a target="_blank" href="https://www.behance.net/chloe-heinis">Behance</a>
        <NuxtLink :to="localePath('legals')">{{ $t('legals.h1') }}</NuxtLink>
        <NuxtLink :to="localePath('mentions')">{{ $t('mentions.h1') }}</NuxtLink>
        <div class="locale">
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)">{{ locale.code }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
