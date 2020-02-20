<template>
    <div class="pb-5 bg-white">

        <div class="p-3 border-bottom">
            <h6 class="mb-0">
                <b-icon icon="chevron-left" scale="1.5" class="mr-2"></b-icon>
                Diary
            </h6>
        </div>

        <div class="px-4">

            <b-row no-gutters class="py-2 mb-3 border-bottom" align-v="center">
                <div class="profile-img m-0" :style="`background-image:url(${url}); width:50px; height:50px;`"></div>
                <div class="col-8 pl-3" style="line-height: 1;">
                    <strong class="d-block">공효진짱</strong>
                    <small class="text-primary">2018.04.28. 18:30 조회:256</small>
                </div>
                <b-button variant="outline-primary" class="ml-auto border-0"><b-icon icon="three-dots-vertical" scale="1.8" ></b-icon></b-button>
            </b-row>

            <div>
                역시 카페에서 먹는 아메리카노가 짱이다.
                더군다나 여기는 셀카가 참 잘나오는 사진 명당소!
                앞으로 내 셀카는 무조건 여기서만 찍어야지 오늘은 정말 너무 잘
                받는날인 것같다.
            </div>

            <img src="" alt="">

            <div class="mt-2 d-flex" style="overflow-x: auto; margin-right: -15px;">
                <img src="../assets/images/thum-profile-sm.png" alt="" class="w-90 m-1" v-for="i in 6" v-bind:key="i">
            </div>

            <div class="text-right mt-2">
                <b-button variant="outline-danger" size="sm" pill class="bg-white ml-auto mr-2">
                    <b-icon icon="star-fill"></b-icon>
                    254
                </b-button>
                <b-button variant="outline-primary" size="sm" pill class="bg-white">
                    <b-icon icon="star-fill"></b-icon>
                    18
                </b-button>
            </div>

            <div class="border-top border-bottom p-3 mt-4">
                <b-icon icon="star-fill" class="rounded-circle" variant="dark"></b-icon> 댓글 31개
            </div>

            <TalkItem class="mt-4"/>

        </div>


    </div>
</template>

<script>
    import TalkItem from "@/components/TalkItem";

    export default {
        name: 'DiaryView',
        components: {TalkItem},
        data() {
            return {
                url: '//kinimage.naver.net/20171221_143/1513808401960QBcEc_JPEG/1513808401719.jpg'
            }
        }
    }
</script>
