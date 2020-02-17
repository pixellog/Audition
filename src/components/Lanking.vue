<template>
    <div class="ranking px-4 py-5">

        <h2 class="d-flex align-items-center font-weight-bold">실시간 랭킹
            <b-button variant="outline-secondary" size="xl" pill class="ml-auto btn-icon">
                <b-icon icon="plus"/>
            </b-button>
        </h2>

        <b-tabs class="mt-4" nav-class="border-0" pills fill active-nav-item-class="btn-danger">
            <b-tab v-for="i in category" v-bind:key="i" :title="i" active
                   title-link-class="btn btn-outline-secondary rounded-pill mx-1 btn-lg"
            >
                <LankingItems class="-d-none"/>
            </b-tab>
        </b-tabs>
    </div>

</template>

<script>
    import LankingItems from "./LankingItems";

    export default {
        name: 'Lanking',
        components: {LankingItems},
        data() {
            return {
                category: ['#종합', '#남자', '#여자']
            }
        },
        methods: {}
    }
</script>
