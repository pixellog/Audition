<template>
    <div class="bg-muted">
        <Header/>

        <div class="bg-gradient py-4 text-white text-center">

            <div class="profile-img mt-0" :style="`background-image:url(${url}); width:80px; height:80px; border-width:2px`">
                <!-- 사진이 있으면 숨김처리 -->
                <b-icon v-if="!url" icon="plus" scale="4" variant="primary"/>

                <b-button variant="link" pill class="position-absolute btn-icon" style="right: -4px; bottom: -4px; width: 1.5rem; height: 1.5rem;">
                    <img src="../assets/images/camera@2x.png" alt="프로필 이미지 추가하기" class="w-100"/>
                </b-button>
            </div>

            <h6 class="mt-2"><span>오동백</span> 님</h6>

            <b-row class="mx-4 mt-3 mb-5">
                <b-button variant="light" size="sm" pill class="text-danger mx-1 flex-grow-1 font-weight-bold">PROFILE</b-button>
                <b-button variant="light" size="sm" pill class="text-danger mx-1 flex-grow-1 font-weight-bold">PHOTO</b-button>
                <b-button variant="light" size="sm" pill class="text-danger mx-1 flex-grow-1 font-weight-bold">DIARY</b-button>
            </b-row>

        </div>

        <b-card class="rounded border-0 shadow px-3 py-2 m-4" style="margin-top: -3.8rem !important;">
            <h5 class="d-flex align-items-center">HEART
                <b-button variant="link" class="ml-auto btn-icon">
                    <b-icon icon="chevron-right" scale="1.2" variant="secondary"/>
                </b-button>
            </h5>

            <div class="text-danger h2 text-center my-3">
                <b-icon icon="heart-fill"></b-icon>
                96,271
            </div>

            <b-row class="mx-0">
                <b-button variant="primary" pill class="flex-grow-1 mx-1 border-0">이용내역</b-button>
                <b-button variant="danger" pill class="flex-grow-1 mx-1">충전하기</b-button>
            </b-row>
        </b-card>

        <b-card class="rounded border-0 shadow px-3 py-2 m-4">
            <h5 class="d-flex align-items-center">REWARD
                <b-button variant="link" class="ml-auto btn-icon">
                    <b-icon icon="chevron-right" scale="1.2" variant="secondary"/>
                </b-button>
            </h5>

            <div class="text-dark h2 text-center my-3 d-flex align-items-center justify-content-center">
                <img src="../assets/images/ic-won@3x.png" alt="" class="mr-2" style="width: 2rem;">
                5,000,000
            </div>

            <b-row class="mx-0">
                <b-button variant="primary" pill class="flex-grow-1 mx-1 border-0">내역</b-button>
                <b-button variant="danger" pill class="flex-grow-1 mx-1">출금신청</b-button>
            </b-row>
        </b-card>

        <Report/>

        <b-card class="rounded border-0 shadow px-3 py-2 mx-4 mb-4" style="margin-top: -1rem;">
            <h5 class="d-flex align-items-center">DIARY
                <b-button variant="link" class="ml-auto btn-icon">
                    <b-icon icon="chevron-right" scale="1.2" variant="secondary"/>
                </b-button>
            </h5>

            <b-row no-gutters class="py-2" :class="index !== 0 ? 'border-top':''" v-for="(i, index) in 3" v-bind:key="i">
                <div class="col small">dittototo 님, soyeon_2 님 외 52명이 댓글을 남겼습니다. <span class="text-primary pl-1">2시간 전</span></div>
                <div class="col-auto"><img src="../assets/images/thum-profile.png" alt="" style="width: 40px; height: 40px; margin-left: 15px;"></div>
            </b-row>
        </b-card>

        <FooterMenu/>

    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Report from "@/components/Report";
    import FooterMenu from "@/components/FooterMenu";

    export default {
        name: 'ProfileMain',
        components: {FooterMenu, Report, Header},
        data() {
            return {
                url: '//kinimage.naver.net/20171221_143/1513808401960QBcEc_JPEG/1513808401719.jpg'
            }
        }
    }
</script>
