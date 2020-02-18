<template>
    <div>
        <Header/>
        <div class="bg-muted py-4 px-4">
            <h3 class="text-center my-3">All Audition</h3>

            <hr class="my-4">

            <div class="d-flex align-items-center">
                <b-form-radio-group v-model="progress" :options="progressOptions"/>
                <b-button variant="danger" pill class="ml-auto">
                    <b-icon icon="filter" variant="light"/>
                    필터
                </b-button>
            </div>

            <b-row>
                <div class="col-6 my-3 end" v-for="i in 10" v-bind:key="i">
                    <img src="../assets/images/audition-1@3x.png" alt="" class="">
                    <small class="flag" style="margin-left: 2rem;">~12.7</small>
                    <h6 class="mt-2 text-truncate">2019 더룩오브코리아 오디션</h6>
                    <p class="small">더룩오브코리아 모델오디션 간단 설명 두줄까지 가능 두줄까지 가능 </p>
                </div>
            </b-row>

            <b-button variant="link" block class="text-secondary">더보기
                <b-icon icon="x-circle" rotate="45" scale="1.5" variant="primary" class="ml-1" />
            </b-button>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: 'Audition',
        components: {Header},
        data() {
            return {
                progress: 0,
                progressOptions: Object.assign({}, ['전체', '진행', '종료']),
            }
        }
    }
</script>
