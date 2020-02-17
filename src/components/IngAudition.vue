<template>
    <div class="ing-audition text-white py-5 px-4">

        <b-row class="align-items-center">
            <div class="col-auto">
                <h2 class="mb-0 font-weight-bold">진행중 오디션</h2>
                <div>최근 진행중인 오디션</div>
            </div>

            <b-button variant="outline-light" size="xl" pill class="ml-auto btn-icon">
                <b-icon icon="plus"/>
            </b-button>
        </b-row>

        <b-row no-gutters class="flex-nowrap mt-5">
            <b-button size="lg" variant="pink" class="col-auto px-4 mr-2" pill v-for="i in category" v-bind:key="i">{{i}}</b-button>
        </b-row>

        <h3 class="text-center mt-4 mb-5">오디션 대회 타이틀 타이틀 타이틀</h3>

        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                img-width="1024"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >

            <b-carousel-slide v-for="i in 3" v-bind:key="i">
                <template v-slot:img>
                    <b-card class="rounded border-0" body-class="p-2">
                        <img class="d-block img-fluid w-100 rounded"
                             src="../assets/images/audition-1@3x.png"
                             alt="">
                        <div class="flag ml-4">~12.7</div>
                        <b-row no-gutters class="mt-4 mb-3">
                            <b-button size="lg" pill variant="outline-secondary" class="px-3 my-1 flex-grow-1">공식홈</b-button>
                            <b-button size="lg" pill variant="outline-secondary" class="px-3 my-1 flex-grow-1 mx-2">오디션정보</b-button>
                            <b-button size="lg" pill variant="outline-secondary" class="px-3 my-1 flex-grow-1">공유하기</b-button>
                        </b-row>
                    </b-card>
                </template>
            </b-carousel-slide>

        </b-carousel>

        <div class="h4 text-center mt-5">
            오디션 대회 서브 요약 설명 설명 설명 설명 <br>
            <small>참가모집 : 2020. 03. 01 ~ 03. 15</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IngAudition',
        data() {
            return {
                slide: 0,
                sliding: null,
                category: ['#모델', '#방송/연예', '#음악', '#영화', '#연극']
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    }
</script>
