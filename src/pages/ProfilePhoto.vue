<template>
    <div class="pages bg-muted py-5">

        <b-form class="mb-5 pb-5">
            <div class="logo mx-auto">
                <div class="sr-only">Open Audiiton</div>
            </div>

            <div class="profile-img" :style="`background-image:url(${url});`">
                <!-- 사진이 있으면 숨김처리 -->
                <b-icon v-if="!url" icon="plus" scale="4" variant="primary"/>

                <b-button variant="link" size="lg" pill class="position-absolute btn-icon" style="right: -20px;bottom: -4px">
                    <img src="../assets/images/camera@2x.png" alt="프로필 이미지 추가하기" class="x2" />
                </b-button>
            </div>

            <b-button variant="danger" size="lg" pill block class="w-80 mx-auto mt-5">대표사진 등록</b-button>
            <b-button variant="light" size="lg" pill block class="w-80 mx-auto mt-4 text-dark">다음에 등록</b-button>
        </b-form>

    </div>
</template>

<script>
    export default {
        name: 'ProfilePhoto',
        data() {
            return {
                file: null,
                url: '//kinimage.naver.net/20171221_143/1513808401960QBcEc_JPEG/1513808401719.jpg'
            }
        }
    }
</script>
