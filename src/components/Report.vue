<template>
    <div class="px-3 pb-5 bg-muted">
        <b-card class="report rounded border-0 mx-3 shadow px-3 py-2">
            <h4 class="d-flex align-items-center">REPORT
                <b-button variant="link" class="ml-auto"><img src="../assets/images/btn-arrow@3x.png" class="x2" alt="더보기"></b-button>
            </h4>

            <b-row class="mt-3">
                <div class="col-4 px-3" v-for="i in report" v-bind:key="i">
                    <img src="../assets/images/report-1@3x.png" alt="" class="w-100">
                    <div class="text-truncate text-third h5 font-weight-normal mt-3" style="width: 20vw;">{{i}}</div>
                </div>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Report',
        data() {
            return {
                report: ['더룩오브코리아', '미스코리아선발대회', '오픈오디션']
            }
        },
        methods: {}
    }
</script>