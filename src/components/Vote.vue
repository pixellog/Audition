<template>
    <div>
        <Banner/>
        
        <div class="bg-muted p-2 text-center">
            <strong>투표마감</strong> : 2020 년 00 월 00 시
            <b-button variant="dark" pill size="sm" class="px-3 ml-2">참가신청</b-button>
        </div>

        <div class="bg-dark p-3 text-white text-center">
            <strong class="h4">00</strong> 일 <strong class="h4">00</strong> 시 <strong class="h4">00</strong> 분 <strong class="h4">00</strong> 초
        </div>

        <b-button-group class="w-100">
            <b-button variant="danger" squared class="py-3">공식홈</b-button>
            <b-button variant="danger" squared class="py-3">오디션정보</b-button>
            <b-button variant="danger" squared class="py-3">공유하기</b-button>
        </b-button-group>
    </div>
</template>

<script>
    import Banner from "@/components/Banner";
    export default {
        name: 'VoteMain',
        components: {Banner},
    }
</script>
