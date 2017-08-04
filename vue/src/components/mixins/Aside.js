import bus from '../../util/bus'

export const Aside = {

  data: function () {
    return {
      memo: '밥, 꽁치찌개, 고사리, 상추, 오이지',
      cropImg: null,
      cropImgList: []
    }
  },

  created: function () {
    bus.$on('add_image', this.addImage)
  },

  methods: {
    nextImage: function () {
      bus.$emit('save_and_next_image', '')
    },

    addImage: function (cropImg) {
      this.cropImg = cropImg.aCropImg
      console.log('Name: ' + cropImg.aName + ' / X: ' + cropImg.aX + ' / Y: ' + cropImg.aY + ' / W: ' + cropImg.aWidth + ' / H: ' + cropImg.aHeight)
      this.cropImgList.push(cropImg)
      console.log(this.cropImgList)
    }
  }
}
