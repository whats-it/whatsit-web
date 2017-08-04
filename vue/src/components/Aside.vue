<template>
  <aside class="aside-menu">

    <!--<ul class="nav nav-tabs" role="tablist">-->
      <!--<li class="nav-item">-->
        <!--<a class="nav-link active" data-toggle="tab" href="#timeline" role="tab"><i class="icon-list"></i></a>-->
      <!--</li>-->
      <!--<li class="nav-item">-->
        <!--<a class="nav-link" data-toggle="tab" href="#messages" role="tab"><i class="icon-speech"></i></a>-->
      <!--</li>-->
      <!--<li class="nav-item">-->
        <!--<a class="nav-link" data-toggle="tab" href="#settings" role="tab"><i class="icon-settings"></i></a>-->
      <!--</li>-->
    <!--</ul>-->

    <!-- Tab panes -->
    <div class="tab-content">

      <hr class="transparent mx-3 my-0">
      <button type="button" class="btn btn-danger btn-lg btn-block" @click="nextImage()"><b>저장하고 다음 사진으로</b></button>
      <hr class="transparent mx-3 my-0">

      <div class="tab-pane active" id="timeline" role="tabpanel">

        <div class="callout m-0 py-4 text-muted text-center bg-faded text-uppercase">
          <small><b>메모</b>
          </small>
        </div>

        <hr class="transparent m-0 py-0">
        <textarea style="width: 100%;" rows="4" placeholder="추천단어 없음" disabled>{{ memo }}</textarea>
        <div class="callout m-0">

        </div>

        <hr class="transparent m-0 py-0">


        <!--<hr class="transparent mx-3 my-0">-->
        <!--<div class="callout callout-warning m-0 py-3">-->
          <!--<div class="avatar float-right">-->
            <!--<img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">-->
          <!--</div>-->
          <!--<div>Meeting with-->
                            <!--<strong>Lucas</strong>-->
          <!--</div>-->
          <!--<small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>-->
          <!--<small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>-->
        <!--</div>-->
        <!--<hr class="mx-3 my-0">-->
        <!--<div class="callout callout-info m-0 py-3">-->
          <!--<div class="avatar float-right">-->
            <!--<img src="img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">-->
          <!--</div>-->
          <!--<div>Skype with-->
                            <!--<strong>Megan</strong>-->
          <!--</div>-->
          <!--<small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 5pm</small>-->
          <!--<small class="text-muted"><i class="icon-social-skype"></i>&nbsp; On-line</small>-->
        <!--</div>-->

        <hr class="transparent mx-3 my-0">
        <div class="callout m-0 py-4 text-muted text-center bg-faded text-uppercase">
          <small><b>작업목록</b>
          </small>
        </div>

        <img
          :src="cropImg"
          style="object-fit:contain; width: 100%; height: 100px; border: 1px solid gray;"
          alt="Please crop the above image."
        />

        <!--<hr class="transparent mx-3 my-0">-->
        <!--<div class="callout callout-danger m-0 py-3">-->

        <hr class="mx-0 my-0">
      </div>
    </div>
  </aside>
</template>

<script>
import {Aside} from './mixins/Aside'

export default {
  name: 'aside',
  mixins: [Aside]

}
</script>
