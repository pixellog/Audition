<template>
    <b-row class="mt-4 flex-nowrap" no-gutters>
        <div class="col-5 px-2" v-for="(i,index) in 5" v-bind:key="i">
            <img src="../assets/images/ranking-1@3x.png" :alt="i" class="w-100">
            <div class="flag ml-4">{{index+1}}위</div>
            <h4 class="d-flex align-items-center mt-3 mb-0">
                <strong>오동백</strong>
                <b-button variant="link p-0" class="ml-auto">보기<b-icon icon="plus"/></b-button>
            </h4>
            <div><img class="x2" src="../assets/images/ic-heart@3x.png" alt=""><span class="h5 text-danger ml-2">5,354,555</span></div>
            <div><img class="x2" src="../assets/images/ic-won@3x.png" alt=""><span class="text-warning ml-2">5,354,555</span></div>
        </div>
    </b-row>
</template>

<script>
    export default {
        name: 'LankingItems',
        data() {
            return {}
        },
        methods: {}
    }
</script>
