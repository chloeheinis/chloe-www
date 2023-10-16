<template>
  <header :class="{'header__el--show': menuActive}">
    <Name :class="{ 'studio-name--small': scroll }" />
    <div class="header-grid">
      <NuxtLink :to="localePath('/')">
        <div :class="{ 'logo--small': scroll }" class="logo animation-button">
          <div class="logo__asset animation-logo__asset" :alt="$t('header.alt.logo')"></div>
        </div>
      </NuxtLink>
      <div class="header__el">
        <div @click="menuActive = false">
          <NuxtLink :to="localePath('design')">{{ $t('header.designs') }}</NuxtLink>
        </div>
        <div @click="menuActive = false">
          <NuxtLink :to="localePath('info')">{{ $t('header.info') }}</NuxtLink>
        </div>
        <div @click="menuActive = false">
          <NuxtLink :to="localePath('contact')">{{ $t('header.contact') }}</NuxtLink>
        </div>
      </div>
      <div @click="menuActive = !menuActive" class="header__menu animation-button--child">
        <div class="top-bar"/>
        <div class="bottom-bar"/>
      </div>
    </div>
  </header>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  data() {
      return {
        scroll: false,
        menuActive: false
      }
    },
  methods: {
    handleScroll(event) {
      if (this.isUserScrolling = (window.scrollY > 100)) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    }
  },

  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
}
</script>
