<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Eternal Tree
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menus
        </q-item-label>
        <MenuItem
          v-for="menu in menus"
          :key="menu.title"
          v-bind="menu"
        />
      </q-list>
    </q-drawer>

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
import MenuItem from 'components/MenuItem.vue'

export default {
  name: 'MainLayout',

  components: {
    MenuItem
  },

  data () {
    return {
      leftDrawerOpen: false,
      menus: [
        {
          title: 'Home',
          caption: 'Página com total de pontos',
          icon: 'home',
          link: '/home'
        },
        {
          title: 'Livros',
          caption: 'Lista de livros para ler',
          icon: 'book',
          link: '/books'
        },
        {
          title: 'Sair',
          caption: 'Sair da aplicação',
          icon: 'exit_to_app',
          link: '#',
          isExitBtn: true
        }
      ]
    }
  }
}
</script>
