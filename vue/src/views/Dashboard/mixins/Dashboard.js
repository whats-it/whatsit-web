let WhatsIt = require('whatsit-sdk-js')
let aw = new WhatsIt()
let awProject = aw.getProject()

import bus from '../../../util/bus'

var imgList = [
  '/static/img/bg1.jpg',
  '/static/img/logo-w.png',
  '/static/img/bg2.jpg',
  '/static/img/bg3.jpeg',
]
var imgIndex=0
// var currentImageSrc = '/static/img/bg1.jpg'

export const Dashboard = {

  data: function () {
    return {
      imgSrc: '/static/img/bg1.jpg',
      cropImg: '',
      cropImgX: '0',
      cropImgY: '0',
      cropImgWidth: '0',
      cropImgHeight: '0'
    }
  },

  beforeCreate: function () {
    console.log('Dashboard: beforeCreate')
  },

  created: function () {
    bus.$on('save_and_next_image', this.saveAndNextImage)
  },

  mounted: function () {
  },

  methods: {
    toAddProject: function () {
      console.log('on click to dashboard button')
      this.$router.push('/projects/add')
    },

    saveAndNextImage () {
      ++imgIndex
      if (imgIndex == imgList.length) {
        imgIndex = 0
      }
      this.imgSrc = imgList[imgIndex]
      this.$refs.cropper.replace(this.imgSrc)

      this.resetCanvas()
      this.resetCropImgListState()
    },

    addImage () {
      if (this.cropImg === undefined || this.cropImg === null || this.cropImg === '') {
        return
      }

      bus.$emit('add_image',
        {
          cropImg: this.cropImg,
          name: 'Labeled Name',
          x: this.cropImgX,
          y: this.cropImgY,
          width: this.cropImgWidth,
          height: this.cropImgHeight,
        })
      this.resetCanvas()
    },

    resetCanvas () {
      this.cropImg = ''
      this.cropImgX = '0'
      this.cropImgY = '0'
      this.cropImgWidth = '0'
      this.cropImgHeight = '0'
      this.$refs.cropper.clear()
    },

    resetCropImgListState () {
      window.alert(this.$store.state.cropImgList)
      while (this.$store.state.cropImgList.length > 0) {
        this.$store.state.cropImgList.pop()
      }
    }
  }
}

function getProjects (store) {
  console.log('userId : ' + store.state.userId)
  awProject.getProjectsByUser(store.state.userId)
    .then(res => {
      console.log(res.data.data)
    })
}
