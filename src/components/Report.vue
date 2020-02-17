<template>
    <div class="px-3 pb-5 bg-muted">
        <b-card class="report rounded border-0 mx-3 shadow px-3 py-2">
            <h4 class="d-flex align-items-center">REPORT
                <b-button variant="link" size="lg" class="ml-auto btn-icon">
                    <b-icon icon="chevron-right"/>
                </b-button>
            </h4>

            <b-row class="mt-3">
                <div class="col-4 px-3" v-for="i in report" v-bind:key="i">
                    <img src="../assets/images/report-1@3x.png" alt="" class="w-100">
                    <div class="text-truncate h5 font-weight-normal mt-3 text-center text-primary">{{i}}</div>
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
