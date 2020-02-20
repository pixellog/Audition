<template>
    <div class="pb-5 bg-white min-vh-100">

        <div class="p-3 border-bottom">
            <h6 class="mb-0">
                <b-icon icon="chevron-left" scale="1.5" class="mr-2"></b-icon>
                Create Post
            </h6>
        </div>

        <div class="p-4">

            <b-row>
                <div class="col-auto" style="width: 70px;height: 70px;">
                    <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
                </div>
                <b-textarea rows="5" placeholder="문구입력..." class="col border-0 p-0"></b-textarea>
            </b-row>

            <b-row no-gutters align-v="center mt-3">
                <div>
                    <strong>이미지첨부</strong> <br>
                    등록할 이미지를 첨부해주세요.
                </div>

                <b-button variant="primary" size="sm" squared class="ml-auto border-0 px-3">첨부</b-button>
            </b-row>

            <b-row no-gutters class="mt-3">
                <strong>공개/비공개</strong>
                <b-form-checkbox value="0" name="" switch class="ml-auto"></b-form-checkbox>
            </b-row>

            <b-button variant="danger" pill block class="mt-5 py-3 rounded">올리기</b-button>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'DiaryWrite',
        data() {
            return {}
        }
    }
</script>
