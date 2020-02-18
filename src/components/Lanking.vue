<template>
    <div class="ranking py-5 px-4">

        <h3 class="d-flex align-items-center font-weight-bold">실시간 랭킹
            <b-button variant="outline-secondary" pill class="ml-auto btn-icon">
                <b-icon icon="plus" scale="2" class="m-2 text-primary"/>
            </b-button>
        </h3>

        <b-tabs class="mt-3" nav-class="border-0" pills fill active-nav-item-class="btn-danger">
            <b-tab v-for="(i,index) in category" v-bind:key="i" :title="i" :active="!index"
                   title-link-class="btn btn-outline-secondary rounded-pill mx-1"
            >
                <div class="scrolling-wrapper mt-4" style="margin-left: -30px; margin-right: -30px; padding-left: 30px; padding-right: 30px;">
                    <div class="w-40 d-inline-block px-2 position-relative" v-for="(item,index) in 5" v-bind:key="item">
                        <img src="../assets/images/ranking-1@3x.png" :alt="item" class="w-100">
                        <div class="flag ml-4">{{index+1}}위</div>
                        <h4 class="d-flex align-items-center mt-3 mb-0">
                            <strong>오동백</strong>
                            <b-button variant="link p-0" class="ml-auto">보기<b-icon icon="plus"/></b-button>
                        </h4>
                        <div><img class="x2" src="../assets/images/ic-heart@3x.png" alt=""><span class="h5 text-danger ml-2">5,354,555</span></div>
                        <div><img class="x2" src="../assets/images/ic-won@3x.png" alt=""><span class="text-warning ml-2">5,354,555</span></div>
                    </div>
                </div>
            </b-tab>
        </b-tabs>
    </div>

</template>

<script>
    export default {
        name: 'Lanking',
        data() {
            return {
                category: ['#종합', '#남자', '#여자']
            }
        },
        methods: {}
    }
</script>
