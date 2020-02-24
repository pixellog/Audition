<template>
    <div class="bg-muted px-4 pb-5">
        <b-card class="report rounded border-0 shadow px-3 py-2">
            <h5 class="d-flex align-items-center">REPORT
                <b-button variant="link" class="ml-auto btn-icon">
                    <b-icon icon="chevron-right" scale="1.2" variant="secondary"/>
                </b-button>
            </h5>

            <b-row class="mt-3">
                <div class="col-4 px-2" v-for="i in report" v-bind:key="i">
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
                report: ['더룩오브코리아', '미스코리아선발대회', '오픈오디션'],
                src: '../assets/images/report-1@3x.png'
            }
        },
        methods: {}
    }
</script>
