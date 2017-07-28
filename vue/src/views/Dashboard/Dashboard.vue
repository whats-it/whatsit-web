<template>
  <div>
  <div style="height: 500px">
    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="true"
      @realTime="realTime"
    ></vueCropper>
  </div>
  <div class="test-button">
    <button @click="changeImg" class="btn">changeImg</button>
    <label class="btn" for="uploads">upload</label>
    <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
           accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg">
    <button @click="startCrop" v-if="!crap" class="btn">start</button>
    <button @click="stopCrop" v-else class="btn">stop</button>
    <button @click="clearCrop" class="btn">clear</button>
    <button @click="finish('base64')" class="btn">preview(base64)</button>
    <button @click="finish('blob')" class="btn">preview(blob)</button>
    <a @click="down('base64')" class="btn" :href="downImg" download="demo">download(base64)</a>
    <a @click="down('blob')" class="btn" :href="downImg" download="demo">download(blob)</a>
  </div>
  <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
    <div :style="previews.div">
      <img :src="option.img" :style="previews.img">
    </div>
  </div>
  </div>
</template>

<script>
import vueCropper from 'vue-cropper'
import {Dashboard} from './mixins/Dashboard'

export default {
  name: 'dashboard',
  mixins: [Dashboard],

  components: {
    vueCropper
  },

  data: function () {
    return {
      crap: false,
      previews: {},
      lists: [
        {
          img: '/static/img/logo-w.png'
        },
        {
          img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg'
        }
      ],
      option: {
        img: '',
        size: 0.8,
        outputType: 'jpeg'
      },
      downImg: '#'
    }
  },

  methods: {
    changeImg () {
      this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
    },
    startCrop () {
      // start
      this.crap = true
      this.$refs.cropper.startCrop()
    },
    stopCrop () {
      //  stop
      this.crap = false
      this.$refs.cropper.stopCrop()
    },
    clearCrop () {
      // clear
      this.$refs.cropper.clearCrop()
    },
    //
    realTime (data) {
      this.previews = data
    },
    finish (type) {
      //
      var test = window.open('about:blank')
      test.document.body.innerHTML = '..'
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          var test = window.open('')
          test.location.href = data
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          test.location.href = data
        })
      }
    },

    down (type) {
      // event.preventDefault()
      var aLink = document.createElement('a')
      aLink.download = 'demo'
      //
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = data
          aLink.href = data
          aLink.click()
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data
          aLink.href = data
          aLink.click()
        })
      }
    },

    uploadImg (e) {
      //
      // this.option.img
      var file = e.target.files[0]
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        this.option.img = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>


<style>

</style>
