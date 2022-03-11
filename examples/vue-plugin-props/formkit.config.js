/**
 * This formkit.config.js is used in Nuxt projects, but the object exported
 * below is the same as the argument for defaultConfig when registering the
 * @formkit/vue plugin with the Vue app:
 */

export default {
  props: {
    validation: 'required|length:5,20',
  },
}
