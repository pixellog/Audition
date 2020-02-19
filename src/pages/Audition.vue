<template>
    <div>
        <Header/>

        <div class="bg-muted py-4 px-4">
            <h3 class="text-center my-3">All Audition</h3>

            <hr class="my-4">

            <div class="d-flex align-items-center">
                <b-form-radio-group :checked="0" :options="Object.assign({}, ['전체', '진행', '종료'])"/>
                <b-button variant="danger" pill class="ml-auto">
                    <b-icon icon="filter" variant="light"/>
                    필터
                </b-button>
            </div>

            <AuditionList/>

            <b-button variant="link" block class="text-secondary">더보기
                <b-icon icon="x-circle" rotate="45" scale="1.5" variant="primary" class="ml-1"/>
            </b-button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import AuditionList from "@/components/AuditionList";

    export default {
        name: 'Audition',
        components: {AuditionList, Header},
    }
</script>
