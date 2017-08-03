import bus from '../../util/bus'

export const Aside = {

  created: function () {
  },

  methods: {
    nextImage: function () {
      bus.$emit('save_and_next_image', '')
    }
  }
}
