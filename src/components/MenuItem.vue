<template>
  <div v-if="isExitBtn">
    <q-item
      clickable
      tag="a"
      href="#"
      @click.prevent="signOut"
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>

  <div v-else>
    <q-item
      clickable
      tag="a"
      :href="link"
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',

  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    isExitBtn: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    signOut () {
      this.$store.commit('auth/delUser')
      this.$router.replace('/login')
    }
  }
}
</script>
