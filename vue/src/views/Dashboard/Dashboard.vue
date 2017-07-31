<template>
  <div class="wrapper">

    <div style="max-width: 900px; display: inline-block;">
      <VueCropper
        ref="cropper"
        :guides="true"
        :autoCrop="false"
        :view-mode="2"
        :drag-mode="crop"
        :background="true"
        :src="imgSrc"
        :cropmove="cropImage">
        alt="Source Image">
      </VueCropper>
    </div>

    <br/>
    <img
      :src="cropImg"
      style="object-fit:contain; width: 500px; height: 300px; border: 1px solid gray;"
      alt="Please crop the above image."
    />
    <p> X : {{ cropImgX }} / Y : {{ cropImgY }} / Width : {{ cropImgWidth }} / Height : {{ cropImgHeight }} </p>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import {Dashboard} from './mixins/Dashboard'

export default {
  name: 'dashboard',
  mixins: [Dashboard],

  components: {
    VueCropper
  },


  data: function () {
    return {
      imgSrc: '/static/img/bg3.jpeg',
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
        alert('Please select an image file');
        return;
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader();

        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
//      console.log('cropImage...')
      console.log(this.$refs.cropper.getData())
      this.cropImgX = Math.round(this.$refs.cropper.getData().x)
      this.cropImgY = Math.round(this.$refs.cropper.getData().y)
      this.cropImgWidth = Math.round(this.$refs.cropper.getData().width)
      this.cropImgHeight = Math.round(this.$refs.cropper.getData().height)
    },
    rotate () {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
}
</script>


<style>
  img {
    max-width: 100%; /* This rule is very important, please do not ignore this! */
  }
</style>
