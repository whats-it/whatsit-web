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

var vueCropper
// var bgCanvas

export const Dashboard = {

  data: function () {
    return {
      bgCanvas: null,
      imgSrc: '/static/img/bg1.jpg',
      cropImg: '',
      cropImgX: '0',
      cropImgY: '0',
      cropImgWidth: '0',
      cropImgHeight: '0',
      divAddImg: null
    }
  },

  beforeCreate: function () {
    console.log('Dashboard: beforeCreate')
  },

  created: function () {
    bus.$on('save_and_next_image', this.saveAndNextImage)
  },

  mounted: function () {
    this.divAddImg = document.getElementById('div_add_img')

    // this.bgCanvas = document.getElementById('bg_canvas')

    // vueCropper = document.getElementById('vue_cropper').getBoundingClientRect()
    //
    // bgCanvas.style.top = vueCropper.top
    // bgCanvas.style.left = vueCropper.left
  },

  methods: {
    toAddProject: function () {
      console.log('on click to dashboard button')
      this.$router.push('/projects/add')
    },

    // onReadyImgSrc () {
    //   console.log('onReadyImgSrc')
    //
    //   this.bgCanvas.style.top = 50
    //   this.bgCanvas.style.width = this.$refs.cropper.getContainerData().width.toString().concat('px')
    //   this.bgCanvas.style.height = this.$refs.cropper.getContainerData().height.toString().concat('px')
    //
    //   let ctx = this.bgCanvas.getContext('2d')
    //   ctx.beginPath()
    //   ctx.zIndex=5
    //   ctx.lineWidth='2'
    //   ctx.strokeStyle='blue'
    //   ctx.rect(5, 5, 10, 10)
    //   ctx.stroke()
    // },

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

      if (this.cropImgWidth === 0 || this.cropImgHeight === 0 || this.cropImgWidth === '0' || this.cropImgHeight === '0') {
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
      // this.linedraw(this.cropImgX, this.cropImgY, this.cropImgWidth, this.cropImgHeight)
    },

    // linedraw(aX, aY, aWidth, aHeight) {
    //
    //   console.log('1...')
    //   var canv = this.$refs.cropper.canvas
    //   var ctx=canv.getContext("2d");
    //   console.log(ctx)
    //
    //   ctx.beginPath()
    //   ctx.lineWidth="6";
    //   ctx.strokeStyle="red";
    //   ctx.rect(5, 5, 10, 10);
    //   ctx.stroke();
    //
    //   var c = this.$refs.cropper.getCroppedCanvas()
    //   console.log(c)
    //   console.log('2...')
    // },

    resetCanvas () {
      this.hideDivAddImg(true)

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
    },

    setDivAddImgPosition () {
      let divAddImgX = 30 + this.$refs.cropper.getCropBoxData().left + this.$refs.cropper.getCropBoxData().width - 105
      let divAddImgY = this.$refs.cropper.getCropBoxData().top + this.$refs.cropper.getCropBoxData().height + 10

      this.divAddImg.style.left = divAddImgX.toString().concat('px')
      this.divAddImg.style.top = divAddImgY.toString().concat('px')
    },

    hideDivAddImg (hidden) {
      if (hidden) {
        this.divAddImg.style.display = 'none'
        this.divAddImg.style.visibility = 'hidden'
      } else {
        this.divAddImg.style.display = 'inline'
        this.divAddImg.style.visibility = 'visible'
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
