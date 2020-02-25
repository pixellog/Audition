<template>
    <div>

        <Heading title="Diary"/>

        <div class="px-4">

            <b-row no-gutters class="py-2 mb-3 border-bottom" align-v="center">
                <div class="profile-img m-0" :style="`background-image:url(${url}); width:50px; height:50px;`"></div>
                <div class="col-8 pl-3" style="line-height: 1;">
                    <strong class="d-block">공효진짱</strong>
                    <small class="text-primary">2018.04.28. 18:30 조회:256</small>
                </div>
                <b-button variant="outline-primary" class="ml-auto border-0">
                    <b-icon icon="three-dots-vertical" scale="1.8"></b-icon>
                </b-button>
            </b-row>

            <div>
                역시 카페에서 먹는 아메리카노가 짱이다.
                더군다나 여기는 셀카가 참 잘나오는 사진 명당소!
                앞으로 내 셀카는 무조건 여기서만 찍어야지 오늘은 정말 너무 잘
                받는날인 것같다.
            </div>

            <div class="mt-2 d-flex" style="overflow-x: auto; margin-right: -15px;">
                <img src="../assets/images/thum-profile-sm.png" alt="" class="w-90 m-1" v-for="i in 6" v-bind:key="i">
            </div>

            <div class="text-right mt-2">
                <b-button variant="light" size="sm" pill class="border-danger py-0 ml-auto mr-2">
                    <i class="icon icon-like p-1 mr-1"></i>
                    <small>254</small>
                </b-button>
                <b-button variant="light" size="sm" pill class="border-primary py-0">
                    <i class="icon icon-hate p-1 mr-1"></i>
                    <small>18</small>
                </b-button>
            </div>

            <div class="border-top border-bottom py-3 mt-4">
                <i class="icon icon-reply-fill p-2 mr-1"></i>
                댓글 31개
            </div>

            <TalkItem class="mt-4"/>

        </div>


    </div>
</template>

<script>
    import TalkItem from "@/components/TalkItem";
    import Heading from "@/components/Heading";

    export default {
        name: 'DiaryView',
        components: {Heading, TalkItem},
        data() {
            return {
                url: '//kinimage.naver.net/20171221_143/1513808401960QBcEc_JPEG/1513808401719.jpg'
            }
        }
    }
</script>
