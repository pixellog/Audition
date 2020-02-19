<template>
    <b-row>
        <div class="col-6 my-3 end" v-for="i in 10" v-bind:key="i">
            <img src="../assets/images/audition-1@3x.png" alt="" class="">
            <small class="flag" style="margin-left: 2rem;">~12.7</small>
            <h6 class="mt-2 text-truncate">2019 더룩오브코리아 오디션</h6>
            <p class="small">더룩오브코리아 모델오디션 간단 설명 두줄까지 가능 두줄까지 가능 </p>
        </div>
    </b-row>
</template>

<script>
    export default {
        name: 'AuditionList',
    }
</script>
