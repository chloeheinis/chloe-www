<template>
  <ul class="filters">
    <div class="filters-shading first"></div>
    <li> 
      <NuxtLink :to="localePath(`/design`)">
          {{ $t('filters.all') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/visualidentity`)">
          {{ $t('filters.visualidentity') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/illustration`)">
          {{ $t('filters.illustration') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/webdesign`)">
          {{ $t('filters.webdesign') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/typography`)">
          {{ $t('filters.typography') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/logo`)">
          {{ $t('filters.logo') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath(`/filters/edition`)">
          {{ $t('filters.edition') }}
      </NuxtLink>
    </li>
    <div class="filters-shading last"></div>
  </ul>
</template>
