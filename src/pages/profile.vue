<template>
    <div class="pages bg-muted">

      <div class="logo mx-auto" style="margin: 95px 0 280px;">
        <div class="sr-only">Open Audiiton</div>
      </div>

      <div class="rounded-circle bg-black-50  mx-auto position-relative" style="width: 200px;height: 200px; margin-top: 280px; margin-bottom: 114px; border:4px solid #fff;">
        <b-button variant="link" class="position-absolute" style="right: -20px;bottom: 0;"><img src="../assets/images/camera@2x.png" alt="" style="width: 63px;"></b-button>
      </div>

      <b-button variant="danger" size="lg" pill block class="w-50 mx-auto">대표사진 등록</b-button>
      <b-button variant="light" size="lg" pill block class="w-50 mx-auto mt-4">다음에 등록</b-button>

    </div>
</template>

<script>
    export default {
        name: 'Profile',
        props: {
            msg: String
        }
    }
</script>
