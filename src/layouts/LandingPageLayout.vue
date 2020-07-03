<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="in-out"
      >
        <router-view key="landingPageLayout" />
      </transition-group>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LandingPageLayout',

  data () {
    return {
    }
  }
}
</script>
