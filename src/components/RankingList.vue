<template>
    <div class="px-3 bg-white">
        <b-row @click="goDetail" v-for="(i,index) in 5" v-bind:key="i" class="border-bottom py-3" align-h="center">
            <div class="col-4">
                <img src="../assets/images/ranking-1@3x.png" alt="" class="w-100"/>
            </div>
            <div class="col-8 pl-0 d-flex align-items-center">
                <div>
                    <b-row align-v="center">
                        <small class="flag p-1 position-relative ml-3 mr-2">{{index+1}}위</small>
                        <strong class="text-lg">오동백</strong>
                        <span class="col-auto ml-auto border-0 text-danger">
                            <b-icon icon="heart-fill"/>
                            5,354,555
                        </span>
                    </b-row>
                    <h6 class="mt-3">만 26세 · 172cm · 52kg</h6>
                    <div class="small text-primary">다짐 한마디 다짐 한마디 다짐 한마디 다짐한 마디 다짐한마디 다짐한마디 다짐</div>
                </div>
            </div>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'RankingList',
        methods: {
            goDetail(){
                this.$router.push({ path: 'list/detail' });
            }
        }
    }
</script>
