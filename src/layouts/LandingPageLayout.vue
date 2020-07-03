<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view />
      </transition>
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
