<template>
    <div class="ing-audition text-white py-5 px-4">

        <h3 class="d-flex align-items-center font-weight-bold">
            <div>진행중 오디션<small class="d-block h7 mt-1">최근 진행중인 오디션</small></div>
            <b-button variant="outline-light" pill class="ml-auto btn-icon">
                <b-icon icon="plus" scale="2" class="m-2" />
            </b-button>
        </h3>

        <div class="scrolling-wrapper mt-4" style="margin-left: -30px; margin-right: -30px; padding-left: 30px; padding-right: 30px;">
            <b-button variant="pink" class="px-4 mr-2" pill v-for="item in category" v-bind:key="item">{{item}}</b-button>
        </div>

        <h4 class="text-center mt-4 mb-5">오디션 대회 타이틀 타이틀 타이틀</h4>

        <VueSlickCarousel v-bind="settings" class="position-relative">
            <div v-for="i in 5" v-bind:key="i">
                <div class="card rounded border-0 shadow-lg p-2 mx-2 mb-5">
                    <img class="d-block img-fluid w-100 rounded"
                         src="../assets/images/audition-1@3x.png"
                         alt="">
                    <div class="flag ml-4">~12.7</div>
                    <b-row no-gutters class="mt-4 mb-3">
                        <b-button pill variant="outline-secondary" class="px-1 my-1 flex-grow-1">공식홈</b-button>
                        <b-button pill variant="outline-secondary" class="px-1 my-1 flex-grow-1 mx-1">오디션정보</b-button>
                        <b-button pill variant="outline-secondary" class="px-1 my-1 flex-grow-1">공유하기</b-button>
                    </b-row>
                </div>
            </div>
        </VueSlickCarousel>


        <div class="h5 text-center">
            오디션 대회 서브 요약 설명 설명 설명 설명 <br>
            <small>참가모집 : 2020. 03. 01 ~ 03. 15</small>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    export default {
        name: 'Audition',
        components: {VueSlickCarousel},
        data() {
            return {
                slide: 0,
                sliding: null,
                category: ['#모델', '#방송/연예', '#음악', '#영화', '#연극'],
                settings: {
                    "centerMode": true,
                    "centerPadding": "50px",
                    "focusOnSelect": true,
                    "infinite": true,
                    "slidesToShow": 1,
                    "speed": 500,
                    "vertical": false,
                }
            };
        },
    }
</script>
