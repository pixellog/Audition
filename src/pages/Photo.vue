<template>
    <div class="min-vh-100 d-flex flex-column">
        <Header/>

        <div class="flex-grow-1">
            <div class="bg-dark text-white text-center p-3 font-weight-bold">Photo</div>
            <div class="mt-5 photo-gallery">
                <gallery :images="images" :index="index" @close="index = null">
                    <!-- https://github.com/RobinCK/vue-gallery#readme -->
                    <!-- todo : 클릭시 이미지 카운팅 임시 처리, 스와이프시 구현도 하셔야합니다. -->
                    <b-icon @click="index = index == 0 ? images.length-1 : index-1 " slot="prev" icon="chevron-left" font-scale=".5"></b-icon>
                    <b-icon @click="index = index<images.length-1 ? index+1 :0" slot="next" icon="chevron-right" font-scale=".5"></b-icon>
                    <div slot="close">
                        <b-icon icon="chevron-left" scale="1.2"></b-icon>
                        {{index+1}}/{{images.length}}
                    </div>
                </gallery>
                <b-row class="flex-wrap mx-2">
                    <div class="col-3 p-1" v-for="(image, imageIndex) in images" :key="imageIndex">
                        <b-button squared class="image" @click="index = imageIndex"
                                  :style="{ backgroundImage: 'url(' + image + ')'}"></b-button>
                    </div>
                    <!-- todo : 기본 16개 나열하고 빈이미지일 경우 아래 코드 출력-->
                    <div class="col-3 p-1" v-for="i in blankImages-images.length" :key="i">
                        <b-button squared class="image">
                            <b-icon icon="plus" scale="3" variant="primary"></b-icon>
                        </b-button>
                    </div>
                </b-row>
            </div>

            <div class="p-3">
                <b-row no-gutters>
                    <b-button size="" pill variant="primary" class="px-5 border-0">일괄삭제</b-button>
                    <b-button size="" pill variant="danger" class="ml-auto px-5">일괄등록</b-button>
                </b-row>

                <p class="mt-3">최대 100개 사진을 업로드 할 수 있습니다.</p>
            </div>
        </div>

        <FooterMenu/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";
    import Vue from 'vue'
    import VueGallery from 'vue-gallery'

    Vue.component('VGallery', VueGallery,);

    export default {
        name: 'Photo',
        components: {FooterMenu, Header, 'gallery': VueGallery},
        data: function () {
            return {
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                    'https://dummyimage.com/800x500/000000/ffffff',
                    'https://dummyimage.com/200x400/000000/ffffff',
                ],
                index: null,
                blankImages: 16,
            };
        },
        methods: {}
    }
</script>