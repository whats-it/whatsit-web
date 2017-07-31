<template>
  <div class="wrapper">

    <div style="max-width: 900px; display: inline-block;">
      <VueCropper
        ref="cropper"
        :guides="true"
        :autoCrop="false"
        :background="true"
        :minContainerWidth="500"
        :minContainerHeight="500"
        :minCanvasWidth="500"
        :minCanvasHeight="500"
        :view-mode="2"
        :drag-mode="crop"
        :src="imgSrc"
        :cropmove="cropImage">
        alt="이미지 불러오는중...">
      </VueCropper>
    </div>

    <br/>
    <img
      :src="cropImg"
      style="object-fit:contain; width: 500px; height: 300px; border: 1px solid gray;"
      alt="Please crop the above image."
    />  <button @click="nextImage()">다음 사진 >></button>
    <p> X : {{ cropImgX }} / Y : {{ cropImgY }} / Width : {{ cropImgWidth }} / Height : {{ cropImgHeight }} </p>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import {Dashboard} from './mixins/Dashboard'

var imgList = [
  '/static/img/bg1.jpg',
  '/static/img/logo-w.png',
  '/static/img/bg2.jpg',
  '/static/img/bg3.jpeg',
]
var imgIndex=0

export default {
  name: 'dashboard',
  mixins: [Dashboard],

  beforeCreate: function () {

  },

  components: {
    VueCropper
  },

  data: function () {
    return {
      imgSrc: '/static/img/bg1.jpg',
      cropImg: '',
      cropImgX: '0',
      cropImgY: '0',
      cropImgWidth: '0',
      cropImgHeight: '0'
    };
  },

  methods: {
    setImage (e) {
      const file = e.target.files[0];

      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return;
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
          console.log('Target Image...')
          console.log(event.target.result)
        }

        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },

    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      console.log(this.$refs.cropper.getData())
      this.cropImgX = Math.round(this.$refs.cropper.getData().x)
      this.cropImgY = Math.round(this.$refs.cropper.getData().y)
      this.cropImgWidth = Math.round(this.$refs.cropper.getData().width)
      this.cropImgHeight = Math.round(this.$refs.cropper.getData().height)
    },

    nextImage () {
      ++imgIndex
      if (imgIndex == imgList.length) {
        imgIndex = 0
      }
      this.cropImg = ''
      this.imgSrc = imgList[imgIndex]
      this.$refs.cropper.replace(this.imgSrc)
    }
  }
}
</script>


<style>
  img {
    max-width: 100%; /* This rule is very important, please do not ignore this! */
  }
</style>
