<template>
    <div>
        <b-row class="py-3 px-4 bg-muted border mt-5">
            <h5 class="col-auto mb-0">최신 다이어리</h5>
            <div class="col-auto ml-auto">더보기
                <b-icon icon="chevron-right" scale="1.5" class="ml-2"></b-icon>
            </div>
        </b-row>

        <b-row class="p-3 border-bottom" v-for="i in 3" v-bind:key="i">
            <div class="col-auto" style="width: 5rem;height: 5rem;">
                <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
            </div>
            <div class="col pl-0">
                <div>
                    자존감 문제는 내게만 중요한 일이 아니었다. 불행하다며 나를 찾아오는 대다수는 자존감이 부족한 사람들이었다. - 자존감 수업中 ...
                    <div class="mt-2 d-flex flex-wrap">
                        <img src="../assets/images/thum-profile-sm.png" alt="" class="w-10 m-1" v-for="i in 4" v-bind:key="i">
                    </div>
                </div>

                <div class="small my-2">2018.04.28</div>

                <SnsButton/>
            </div>
            <div class="w-100"></div>
        </b-row>
    </div>
</template>

<script>
    import SnsButton from "@/components/SnsButton";

    export default {
        name: 'Diary',
        components: {SnsButton},
        data() {
            return {}
        },
    }
</script>
